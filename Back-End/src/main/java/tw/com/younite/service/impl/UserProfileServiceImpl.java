package tw.com.younite.service.impl;

import tw.com.younite.entity.UserProfileEntity;
import tw.com.younite.mapper.UserMapper;
import tw.com.younite.service.exception.FullNameDuplicatedException;
import tw.com.younite.service.exception.InsertProfileException;
import tw.com.younite.service.exception.UpdateException;
import tw.com.younite.service.exception.UserNotFoundException;
import tw.com.younite.service.inter.IUserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserProfileServiceImpl implements IUserProfileService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public void insertProfile(UserProfileEntity userProfile) {
        //檢查暱稱是否重複
        String fullName = userProfile.getFullName();
        if (userMapper.getByFullName(fullName) != null) {
            throw new FullNameDuplicatedException("暱稱重複!");
        }
        Integer rows = userMapper.insertProfile(userProfile);
        if (rows != 1) {
            throw new InsertProfileException("伺服器/資料庫異常!");
        }
    }
    @Override
    public UserProfileEntity getUserProfile(Integer id) {
        if (userMapper.getUserByID(id) == null) {
            throw new UserNotFoundException("使用者帳號不存在!");
        }
        return userMapper.getProfileByID(id);
    }

    @Override
    public void resetUserProfile(UserProfileEntity userprofile) {
        Integer row = userMapper.updateUserProfileByID(userprofile);
        if (row != 1) {
            throw new UpdateException();
        }
    }
}
