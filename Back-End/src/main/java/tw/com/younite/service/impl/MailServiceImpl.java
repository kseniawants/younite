package tw.com.younite.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import tw.com.younite.entity.UserEntity;
import tw.com.younite.mapper.UserMapper;
import tw.com.younite.service.inter.MailService;
import org.springframework.mail.javamail.JavaMailSender;

@Service
public class MailServiceImpl implements MailService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private UserMapper userMapper;

    // 其他依賴注入...

    @Override
    public void sendResetPasswordEmail(String email, String verificationCode) {
        // 驗證輸入的電子郵件地址是否有效且存在於使用者資料庫中
        UserEntity user = userMapper.getByUserEmail(email);
        if (user == null) {
            // 郵件地址無效，可以在這裡處理錯誤情況
            return;
        }

        // 建立郵件內容
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email); // 設定收件人郵件地址
        message.setSubject("younite重置密碼驗證信"); // 設定郵件主題
        message.setText("您的重置密碼驗證碼為：" + verificationCode); // 設定郵件內容
        // 使用 JavaMailSender 發送郵件
        javaMailSender.send(message);
    }
}
