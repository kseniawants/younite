package tw.com.younite.mapper;

import tw.com.younite.entity.InterestEntity;
import tw.com.younite.entity.UserProfileEntity;

import java.util.List;

public interface InterestMapper {
    Integer addInterest(InterestEntity interest);
    InterestEntity getInterests(Integer userID);
    List<UserProfileEntity> findUsersByInterests(String[] interests);

}
