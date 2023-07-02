package tw.com.younite.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import tw.com.younite.entity.users;
import tw.com.younite.service.inter.IUserServiceMP;

import java.util.List;

@RestController
public class UserControllerMP {
    @Autowired
    private IUserServiceMP iUserServiceMP;
    @PostMapping("/user/googleLogin")
    public  void saveUser(@RequestParam("credential") String token){
        users user = iUserServiceMP.loginByGoogle(token);
        //users(email=raytheon1229@gmail.com, username=Lee ter, googleUser=true)˙3784563456
        System.out.println(user + "controller");
        iUserServiceMP.save(user);
//        LambdaQueryWrapper<users> lqw = new LambdaQueryWrapper<>();
//        lqw.eq(users::getEmail, user.getEmail());
//
//        List<users> result = iUserServiceMP.list(lqw);
//        if (result.isEmpty()) {
//            iUserServiceMP.save(user);
//            System.out.println("用户不存在，已保存到数据库");
//        } else {
//            System.out.println("用户已存在于数据库");
//        }
    }
}
