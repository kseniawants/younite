package tw.com.younite.controller;

import tw.com.younite.entity.UserEntity;
import tw.com.younite.service.inter.IUserService;
import tw.com.younite.util.EncryptionUtils;
import tw.com.younite.util.JSONResult;

//import io.swagger.annotations.Api;
//import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

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
    @Autowired
    private EncryptionUtils encryptionUtils;

    @GetMapping("/users/getUser/{userID}")
    public JSONResult<UserEntity> getUser(@PathVariable Integer userID, HttpSession session) throws Exception {
        UserEntity user = iUserService.getUserByID(userID);
        return new JSONResult<UserEntity>(OK, user);
    }

    @GetMapping("/users/getUser")
    public JSONResult<UserEntity> getCurrentUser(HttpSession session) {
        Integer userID = getIDFromSession(session);
        UserEntity user = iUserService.getUserByID(userID);
        return new JSONResult<UserEntity>(OK, user);
    }




    @PostMapping("/users/register")
    public JSONResult<Void> reg(@RequestBody UserEntity user, HttpSession session) {
        iUserService.reg(user);
        session.setAttribute("id", user.getId());
        return new JSONResult<>(CREATE_OK);
    }

    @PostMapping("/users/registerByOAuth")
    public JSONResult<Void> register(@RequestBody UserEntity user, HttpSession session) {
        user.setGoogleUser("1");
        user.setThirdPartyLogin(true);
        iUserService.regByOAuth(user);
        session.setAttribute("id", user.getId());
        return new JSONResult<>(CREATE_OK);
    }

    @PostMapping("/users/logout")
    public JSONResult<Void> Logout (HttpSession session) {
        session.removeAttribute("id");
        session.removeAttribute("username");
        return new JSONResult<>(OK);
    }

    @PostMapping("/users/login")
    public JSONResult<UserEntity> login(HttpSession session, @RequestBody UserEntity user) {
        UserEntity data = iUserService.login(user);
        //TODO: 把username改成profiles中的full name.
        session.setAttribute("id", data.getId());
        session.setAttribute("username", data.getUsername());
        return new JSONResult<UserEntity>(OK, data);
    }

    @PutMapping("/users/resetPassword")
    public JSONResult<Void> changePassword(String oldPassword, String newPassword, HttpSession session) {
        Integer id = getIDFromSession(session);
        iUserService.resetPassword(id, oldPassword, newPassword);
        return new JSONResult<>(NO_CONTENT_OK);
    }

    @PutMapping("/users/resetPassword/{userID}")
    public JSONResult<Void> changePasswordTwo(@PathVariable Integer userID, String oldPassword, String newPassword, HttpSession session) {
        iUserService.resetPassword(userID, oldPassword, newPassword);
        return new JSONResult<>(NO_CONTENT_OK);
    }
}
