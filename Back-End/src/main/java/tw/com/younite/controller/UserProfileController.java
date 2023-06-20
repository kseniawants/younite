package tw.com.younite.controller;

import tw.com.younite.entity.UserProfile;
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
@CrossOrigin (origins = "*")
public class UserProfileController extends BaseController {
    @Autowired
    private IUserProfileService iUserProfileService;

    @Autowired
    private FileUploadUtil fileUploadUtil;

    @Autowired
    private DateUtil dateUtil;

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

    /**
     * 限制上傳的文件類型
     */
    public static final List<String> AVATAR_TYPE = new ArrayList<>();

    static {
        AVATAR_TYPE.add("image/jpeg");
        AVATAR_TYPE.add("image/png");
        AVATAR_TYPE.add("image/bmp");
        AVATAR_TYPE.add("image/gif");
        AVATAR_TYPE.add("image/svg");
        AVATAR_TYPE.add("image/webp");
    }

    @PostMapping(value = "/users/userInfo", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public JSONResult<String> insertProfile(@ModelAttribute UserProfile userProfile,
                                            HttpSession session,
                                            @RequestParam("file") MultipartFile avatar,
                                            @RequestParam("birthday") String birthday) {
        Integer userID = getIDFromSession(session);
        userProfile.setId(userID);
        if (avatar.isEmpty()) {
            throw new FileEmptyException("大頭照不能為空");
        }

        if (avatar.getSize() > AVATAR_MAX_SIZE) {
            throw new FileSizeException("檔案大小必須小於等於10Mb!");
        }

        if (!AVATAR_TYPE.contains(avatar.getContentType())) {
            throw new FileTypeException("大頭照上傳類型錯誤，必須為jpeg/png/gif/bpm/svg/webp");
        }

        String avatarPath = fileUploadUtil.uploadFile(avatar);
        userProfile.setProfileAvatar(avatarPath);

        Date date = dateUtil.parseDate(birthday);
        userProfile.setBirthday(date);

        iUserProfileService.insertProfile(userProfile);
        //返回使用者的大頭貼路徑給前端，未來可以展示用
        return new JSONResult<>(CREATE_OK, avatarPath);
    }

    @GetMapping("/users/userProfile")
    public JSONResult<UserProfile> getUserProfile(HttpSession session) {
        Integer userID = getIDFromSession(session);
        UserProfile data = iUserProfileService.getUserProfile(userID);
        return new JSONResult<>(OK, data);
    }

    @PutMapping("/users/resetUserProfile")
    public JSONResult<Void> resetProfile(@ModelAttribute UserProfile userProfile,
                                         HttpSession session,
                                         @RequestParam("file") MultipartFile avatar,
                                         @RequestParam("birthday") String birthday) {
        Integer id = getIDFromSession(session);
        fileUploadUtil.uploadFile(avatar);
        iUserProfileService.resetUserProfile(userProfile);
        return new JSONResult<Void>(NO_CONTENT_OK);
    }
}
