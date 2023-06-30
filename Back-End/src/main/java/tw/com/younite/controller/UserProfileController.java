package tw.com.younite.controller;

import tw.com.younite.entity.UserPhotosEntity;
import tw.com.younite.entity.UserProfileEntity;
import tw.com.younite.service.exception.BlockedIDAlreadyExistsException;
import tw.com.younite.service.exception.BlockedUserNotFoundException;
import tw.com.younite.service.exception.DuplicatedUserProfileException;
import tw.com.younite.service.inter.IUserPhotosService;
import tw.com.younite.service.inter.IUserProfileService;
import tw.com.younite.util.DateUtil;
import tw.com.younite.util.FileUploadUtil;
import tw.com.younite.util.JSONResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tw.com.younite.service.uploadException.FileEmptyException;
import tw.com.younite.service.uploadException.FileSizeException;
import tw.com.younite.service.uploadException.FileTypeException;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserProfileController extends BaseController {
    @Autowired
    private IUserProfileService iUserProfileService;

    @Autowired
    private FileUploadUtil fileUploadUtil;

    @Autowired
    private DateUtil dateUtil;

    @Autowired
    private IUserPhotosService iUserPhotosService;

    /**
     *
     * @param userProfile
     * @param session
     * @param avatar MultipartFile是Spring MVC提供的一個接口，可以接受各文件類型的數據
     * @return
     */

    /**
     * 限制上傳大頭貼最大值
     */
    public static final int AVATAR_MAX_SIZE = 10 * 1024 * 1024;
    public static final int VOICE_INTRO_MAX_SIZE = 5 * 1024 * 1024;

    /**
     * 限制上傳的文件類型
     */
    public static final List<String> AVATAR_TYPE = new ArrayList<>();
    public static final List<String> VOICE_TYPE = new ArrayList<>();

    static {
        AVATAR_TYPE.add("image/jpeg");
        AVATAR_TYPE.add("image/png");
        AVATAR_TYPE.add("image/bmp");
        AVATAR_TYPE.add("image/gif");
        AVATAR_TYPE.add("image/svg");
        AVATAR_TYPE.add("image/webp");
    }

    static {
        VOICE_TYPE.add("audio/mpeg");
        VOICE_TYPE.add("audio/wav");
        VOICE_TYPE.add("audio/aac");
    }

    @PostMapping(value = "/users/profile", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public JSONResult<String> insertProfile(@ModelAttribute UserProfileEntity userProfile,
                                            HttpSession session,
                                            String birthday,
                                            @RequestParam(required = false) MultipartFile voice,
                                            MultipartFile avatar,
                                            MultipartFile[] photos) {
        Integer userID = getIDFromSession(session);
        if (iUserProfileService.getUserProfile(userID) == null) {
            userProfile.setId(userID);
        } else {
            throw new DuplicatedUserProfileException("個人檔案重複");
        }

        if (voice != null) {
            validateVoice(voice);
            userProfile.setVoiceIntro(fileUploadUtil.uploadFile(voice));
        }

        validateAvatar(avatar);
        String avatarPath = fileUploadUtil.uploadFile(avatar);
        userProfile.setProfileAvatar(avatarPath);

        Date date = dateUtil.parseDate(birthday);
        userProfile.setBirthday(date);

        iUserProfileService.insertProfile(userProfile);
        handleUserPhotos(userID, photos);

        //返回使用者的大頭貼路徑給前端，未來可以展示用
        return new JSONResult<>(CREATE_OK, avatarPath);
    }

    @PostMapping("/users/blockUser")
    public JSONResult<Void> blockUser(HttpSession session, Integer blockedUserID) {
        Integer userID = getIDFromSession(session);
        if (iUserProfileService.getBlockedID(userID).contains(blockedUserID)) {
            throw new BlockedIDAlreadyExistsException("此用戶已在黑名單內");
        }
        iUserProfileService.blockUser(userID, blockedUserID);
        return new JSONResult<>(CREATE_OK, "已成功添加黑名單");
    }

    @PostMapping("/users/unblockUser")
    public JSONResult<Void> unblockUser(HttpSession session, Integer unblockedUserID) {
        Integer userID = getIDFromSession(session);
        if (!iUserProfileService.getBlockedID(userID).contains(unblockedUserID)) {
            throw new BlockedUserNotFoundException();
        }
        iUserProfileService.unblockUser(userID, unblockedUserID);
        return new JSONResult<>(CREATE_OK, "已將用戶自黑名單中移除!");
    }


    @GetMapping("/users/getBlokedID")
    public JSONResult<List<Integer>> getBlockedList(HttpSession session) {
        Integer userID = getIDFromSession(session);
        List<Integer> data = iUserProfileService.getBlockedID(userID);
        return new JSONResult<>(OK, data);
    }

    @GetMapping("/users/profile")
    public JSONResult<UserProfileEntity> getUserProfile(HttpSession session) {
        Integer userID = getIDFromSession(session);
        UserProfileEntity data = iUserProfileService.getUserProfile(userID);
        return new JSONResult<>(OK, data);
    }

    @GetMapping("/users/profile/{userID}")
    public JSONResult<UserProfileEntity> getUserProfile(@PathVariable Integer userID) {
        UserProfileEntity data = iUserProfileService.getUserProfile(userID);
        return new JSONResult<>(OK, data);
    }

    @PutMapping("/users/profile")
    public JSONResult<Void> resetProfiles(@ModelAttribute UserProfileEntity userProfile,
                                          HttpSession session,
                                          String birthday,
                                          MultipartFile avatar,
                                          MultipartFile voice,
                                          MultipartFile[] photos) {
        Integer userID = getIDFromSession(session);
        userProfile.setUserId(userID);


        userProfile.setBirthday(dateUtil.parseDate(birthday));


        String newAvatarPath = fileUploadUtil.uploadFile(avatar);
        String newVoicePath = fileUploadUtil.uploadFile(voice);


        userProfile.setProfileAvatar(newAvatarPath);
        userProfile.setVoiceIntro(newVoicePath);
        iUserProfileService.resetUserProfile(userProfile);
        handleUserPhotos(userID, photos);

        return new JSONResult<Void>(NO_CONTENT_OK);
    }

    private void validateAvatar(MultipartFile avatar) {
        if (avatar.isEmpty()) {
            throw new FileEmptyException("大頭照不能為空");
        }

        if (avatar.getSize() > AVATAR_MAX_SIZE) {
            throw new FileSizeException("大頭貼大小必須小於等於10Mb!");
        }

        if (!AVATAR_TYPE.contains(avatar.getContentType())) {
            throw new FileTypeException("大頭照上傳類型錯誤，必須為jpeg/png/gif/bpm/svg/webp");
        }
    }

    private void validateVoice(MultipartFile voice) {
        if (voice.getSize() > VOICE_INTRO_MAX_SIZE) {
            throw new FileSizeException("音檔大小必須小於5Mb");
        }

        if (!VOICE_TYPE.contains(voice.getContentType())) {
            throw new FileTypeException("音檔上傳類型錯誤，必須為mp3/wav/aac");
        }
    }

    private void handleUserPhotos(Integer userID, MultipartFile[] photos) {
        Integer profileID = iUserProfileService.getUserProfile(userID).getProfileId();
        UserPhotosEntity userPhotos = new UserPhotosEntity();
        userPhotos.setProfileID(profileID);

        for (int i = 0; i < photos.length; i++) {
            MultipartFile photo = photos[i];
            String photoPath = fileUploadUtil.uploadFile(photo);
            setUserPhotoPath(userPhotos, i, photoPath);
        }
        iUserPhotosService.insertPhotos(userPhotos);
    }

    private void setUserPhotoPath(UserPhotosEntity userPhotos, int index, String photoPath) {
        switch (index) {
            case 0 -> userPhotos.setFirstPhotoPath(photoPath);
            case 1 -> userPhotos.setSecondPhotoPath(photoPath);
            case 2 -> userPhotos.setThirdPhotoPath(photoPath);
            case 3 -> userPhotos.setFourthPhotoPath(photoPath);
            case 4 -> userPhotos.setFifthPhotoPath(photoPath);
            case 5 -> userPhotos.setSixthPhotoPath(photoPath);
            default -> {
            }
        }
    }
}