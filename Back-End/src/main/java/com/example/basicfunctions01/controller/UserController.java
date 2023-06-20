package com.example.basicfunctions01.controller;


import com.example.basicfunctions01.entity.User;
import com.example.basicfunctions01.entity.UserProfile;
import com.example.basicfunctions01.service.IUserService;
import com.example.basicfunctions01.service.exception.RegisterException;
import com.example.basicfunctions01.service.exception.UsernameDuplicatedException;
import com.example.basicfunctions01.service.uploadException.*;
import com.example.basicfunctions01.util.JSONResult;

//import io.swagger.annotations.Api;
//import io.swagger.annotations.ApiOperation;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.google.protobuf.compiler.PluginProtos;
import org.apache.ibatis.ognl.ASTVarRef;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.io.File;
import java.util.UUID;

/**
 * @RestController = @Controller + @ResponseBody(JSON傳輸用)
 */

//@Api(tags = "Users")
@RestController
@CrossOrigin(origins = "*")

public class UserController extends BaseController {

    @Autowired
    private IUserService iUserService;

    //    @ApiOperation(value = "註冊用戶", notes = "註冊帳號，傳User實體")
    @PostMapping("/users/register")
    public JSONResult<Void> reg(@RequestBody User user, HttpSession session) {
        iUserService.reg(user);
        session.setAttribute("id", user.getId());
        return new JSONResult<>(OK);
    }

    /**
     *
     * @param userProfile
     * @param session
     * @param avatar MultipartFile是Spring MVC提供的一個接口，可以接受各文件類型的數據
     * @return
     */

    /** 限制上傳大頭貼最大值 */
    public static final int AVATAR_MAX_SIZE = 10 * 1024 * 1024;

    /** 限制上傳的文件類型 */
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
    public  JSONResult<String> insertProfile(@ModelAttribute UserProfile userProfile,
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
        /** 檢測資料夾是否存在，並創造上傳大頭貼的資料夾*/
        String fileParentPath = session.getServletContext().getRealPath("upload");
        File dir = new File(fileParentPath);
        if (!dir.exists()) {
            dir.mkdirs();
        }
        /** 檢查上傳檔案的名稱與檔案類型，隨機生成圖片前綴名稱。*/
        String originalFileName = avatar.getOriginalFilename();
        System.out.println("originalFileName = " + originalFileName);
        int index = originalFileName.lastIndexOf(".");
        String suffix = originalFileName.substring(index);
        String fileName = UUID.randomUUID().toString().toUpperCase() + suffix;
        //創建一個空文件
        File destination = new File(dir, fileName);
        //大頭貼的文件內容寫入空文件中
        try {
            avatar.transferTo(destination);
        } catch (IOException e) {
            throw new FileUploadIOException("文件讀寫異常!");
        } catch (FileStateException e1) {
            throw new FileStateException("文件狀態異常");
        }
        String avatarPath = "/upload/" + fileName;
        userProfile.setProfileAvatar(avatarPath);

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date parsedDate = dateFormat.parse(birthday);
            userProfile.setBirthday(parsedDate);
        } catch (ParseException e) {
            throw new IllegalArgumentException("無效的日期!");
        }
        iUserService.insertProfile(userProfile);
        //返回使用者的大頭貼路徑給前端，未來可以展示用
        return new JSONResult<>(OK, avatarPath);
    }

    @PostMapping("/users/login")
    public JSONResult<User> login(HttpSession session, @RequestBody User user) {
        User data = iUserService.login(user);
        //TODO: 把username改成profiles中的full name.
        session.setAttribute("id", data.getId());
        session.setAttribute("username", data.getUsername());
        return new JSONResult<User>(OK, data);
    }


    @PutMapping("/users/passwordUpdate")
    public JSONResult<Void> changePassword(String oldPassword, String newPassword, HttpSession session) {
        Integer id = getIDFromSession(session);
        String username = getUsernameFromSession(session);
        iUserService.changePassword(id, username, oldPassword, newPassword);
        return new JSONResult<Void>(OK);
    }

    @RequestMapping("/users/register")
    public JSONResult<Void> reg(User user) {
        JSONResult<Void> jsonResult = new JSONResult<>();
        try {
            iUserService.reg(user);
            jsonResult.setState(200);
            jsonResult.setMessage("帳號創建成功");
        } catch (UsernameDuplicatedException duplicatedException) {
            jsonResult.setState(4000);
            jsonResult.setMessage("使用者名稱重複");
        } catch (RegisterException registerException) {
            jsonResult.setState(5000);
            jsonResult.setMessage("伺服器異常，請稍後再試!");
        }
        return jsonResult;
    }
}
