package tw.com.younite.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import tw.com.younite.entity.UserLikeEntity;
import tw.com.younite.mapper.UserLikeMapper;
import tw.com.younite.service.inter.IUserLikeService;

public class UserLikeImpl implements IUserLikeService {

    @Autowired
    UserLikeMapper userLikeMapper;

    @Override
    public void insertLikedUser(UserLikeEntity userLikeEntity) {
        Integer rows = userLikeMapper.insertLike(userLikeEntity);
    }
}
