package tw.com.younite.service.inter;

import com.baomidou.mybatisplus.extension.service.IService;
import tw.com.younite.entity.User;

public interface IUserService extends IService<User> {
    void reg(User user);
    void regByOAuth(User user);

    void resetPassword(Integer id, String username, String oldPassword, String newPassword);
    User login(User user);
//    User loginByGoogle(String token);
}
