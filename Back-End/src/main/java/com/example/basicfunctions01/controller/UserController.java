package com.example.basicfunctions01.controller;


import com.example.basicfunctions01.entity.Item;
import com.example.basicfunctions01.entity.User;
import com.example.basicfunctions01.entity.UserProfile;
import com.example.basicfunctions01.service.IUserService;
import com.example.basicfunctions01.service.exception.RegisterException;
import com.example.basicfunctions01.service.exception.UsernameDuplicatedException;
import com.example.basicfunctions01.util.JSONResult;

//import io.swagger.annotations.Api;
//import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

import javax.servlet.http.HttpSession;
import java.util.List;

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
    @PostMapping("/register")
    public JSONResult<Void> reg(@RequestBody User user, HttpSession session) {
        iUserService.reg(user);
        session.setAttribute("id", user.getId());
        return new JSONResult<>(OK);
    }

    @PostMapping("/users/userInfo")
    public  JSONResult<Void> insertProfile(@RequestBody UserProfile userProfile, HttpSession session) {
        Integer userID = getIDFromSession(session);
        userProfile.setId(userID);
        iUserService.insertProfile(userProfile);
        return new JSONResult<>(OK);
    }

    @PostMapping("/login")
    public JSONResult<User> login(HttpSession session, @RequestBody User user) {
        User data = iUserService.login(user);
        //TODO: 把username改成profiles中的full name.
        session.setAttribute("id", data.getId());
        session.setAttribute("username", data.getUsername());
        return new JSONResult<User>(OK, data);
    }


    @PutMapping("/passwordUpdate")
    public JSONResult<Void> changePassword(String oldPassword, String newPassword, HttpSession session) {
        Integer id = getIDFromSession(session);
        String username = getUsernameFromSession(session);
        iUserService.changePassword(id, username, oldPassword, newPassword);
        return new JSONResult<Void>(OK);
    }



    @RequestMapping("register")
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
