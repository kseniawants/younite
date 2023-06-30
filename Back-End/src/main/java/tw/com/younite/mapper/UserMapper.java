package tw.com.younite.mapper;

import tw.com.younite.entity.UserEntity;
import tw.com.younite.entity.UserProfileEntity;

import java.util.Date;

public interface UserMapper {
    /**
    * @param user
    * @return 受影響的數據(增、刪、改都有，可以根據返回值判斷)
    */
    Integer register(UserEntity user);
    Integer registerByOAuth(UserEntity user);
    UserEntity getByUsername(String username);
    UserEntity getByUserEmail(String email);
    UserEntity getByUserPhone(String phone);

    /**
     * 根據users table / user id 來修改密碼
     * @param id 用戶的id
     * @param password 用戶輸入的新密碼
     * @param modifiedAt 用戶修改時間
     * @return 受影響的行數
     * */
    Integer updatePasswordByID(Integer id, String password, Date modifiedAt);

    /**
     * 根據users table / user id 來查詢用戶
     * @param id 用戶的id
     * @return User物件
     * */
    UserEntity getUserByID(Integer id);
    /**
     * 根據users table / user id 來查詢用戶
     *  @param id 用戶的id
     *  @return Profile物件
     * */

}
