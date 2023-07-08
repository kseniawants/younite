package tw.com.younite.mapper;

import tw.com.younite.entity.InterestEntity;
import tw.com.younite.entity.UserProfileEntity;

import java.util.List;

public interface InterestMapper {
    Integer addInterest(InterestEntity interest);
    List<InterestEntity> getInterests(Integer userID);
    List<InterestEntity> findUsersByInterests(String interestArray);
    Integer removeInterests(Integer userID);
    Integer updateInterests(Integer userID);

}
