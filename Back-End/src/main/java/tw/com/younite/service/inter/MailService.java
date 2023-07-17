package tw.com.younite.service.inter;

public interface MailService {
    void sendResetPasswordEmail(String email, String verificationCode);
}
