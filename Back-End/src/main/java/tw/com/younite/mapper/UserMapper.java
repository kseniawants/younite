package tw.com.younite.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import tw.com.younite.entity.User;
import tw.com.younite.entity.UserProfile;

import java.util.Date;

@Mapper
public interface UserMapper extends BaseMapper<User> {
    /**
    * @param user
    * @return 受影響的數據(增、刪、改都有，可以根據返回值判斷)
    */
    Integer register(User user);
    Integer registerByOAuth(User user);
    Integer insertProfile(UserProfile userProfile);
    UserProfile getByFullName(String fullName);
    User getByUsername(String username);
    User getByUserEmail(String email);
    User getByUserPhone(String phone);

    /**
     * 根據users table / user id 來修改密碼
     * @param id 用戶的id
     * @param password 用戶輸入的新密碼
     * @param modifiedAt 用戶修改時間
     * @return 受影響的行數
     * */
    Integer updatePasswordByID(Integer id, String password, Date modifiedAt);
    Integer updateUserProfileByID(UserProfile userProfile);
    /**
     * 根據users table / user id 來查詢用戶
     * @param id 用戶的id
     * @return User物件
     * */
    User getUserByID(Integer id);
    /**
     * 根據users table / user id 來查詢用戶
     *  @param id 用戶的id
     *  @return Profile物件
     * */
    UserProfile getProfileByID(Integer id);
}
