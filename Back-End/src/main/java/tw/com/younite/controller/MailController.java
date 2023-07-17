package tw.com.younite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tw.com.younite.entity.UserEntity;
import tw.com.younite.mapper.UserMapper;
import tw.com.younite.service.inter.IUserService;
import tw.com.younite.service.inter.MailService;
import java.util.Random;

@RestController
@RequestMapping("/mail")
public class MailController {

    @Autowired
    private MailService mailService;
    @Autowired
    private UserMapper userMapper;

    @GetMapping("/checkEmail")
    public ResponseEntity<?> checkEmail(@RequestParam("email") String email) {
        // 驗證輸入的電子郵件地址是否有效且存在於使用者資料庫中
        UserEntity user = userMapper.getByUserEmail(email);
        if (user != null) {
            // 生成驗證碼
            String verificationCode = generateVerificationCode();

            // 調用郵件服務發送郵件
            mailService.sendResetPasswordEmail(email, verificationCode);

            return ResponseEntity.ok("Email is valid");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid email");
        }
    }

    private String generateVerificationCode() {
        // 驗證碼的長度
        int codeLength = 6;

        // 可選的驗證碼字符集
        String characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        // 生成驗證碼
        StringBuilder verificationCode = new StringBuilder();
        Random random = new Random();
        for (int i = 0; i < codeLength; i++) {
            int randomIndex = random.nextInt(characters.length());
            char randomChar = characters.charAt(randomIndex);
            verificationCode.append(randomChar);
        }

        return verificationCode.toString();
    }

    // 其他路由和方法...
}



