package com.example.basicfunctions01.mapper;

import com.example.basicfunctions01.entity.User;
import com.example.basicfunctions01.entity.UserProfile;

import java.util.Date;

public interface UserMapper {
    /**
    * @param user
    * @return 受影響的數據(增、刪、改都有，可以根據返回值判斷)
    */
    Integer register(User user);
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

    /**
     * 根據users table / user id 來查詢用戶
     * @param id 用戶的id
     * @return User物件
     * */
    User getUserByID(Integer id);

}
