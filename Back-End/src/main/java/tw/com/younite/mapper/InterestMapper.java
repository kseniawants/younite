package tw.com.younite.mapper;

import tw.com.younite.entity.InterestEntity;

public interface InterestMapper {
    Integer addInterest(InterestEntity interest);
    InterestEntity getInterests(Integer userID);

}
