package tw.com.younite.service.inter;

import tw.com.younite.entity.User;

public interface IUserService {
    void reg(User user);
    void regByOAuth(User user);

    void resetPassword(Integer id, String username, String oldPassword, String newPassword);
    User login(User user);

}
