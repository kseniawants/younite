package tw.com.younite.mapper;

import tw.com.younite.entity.UserProfileEntity;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.util.List;

public interface UserProfileMapper {
    Integer insertProfile(UserProfileEntity userProfile);
    Integer updateUserProfileByID(UserProfileEntity userProfile);
    Integer blockUser(UserProfileEntity userProfile);
    Integer unblockUser(UserProfileEntity userProfile);
    UserProfileEntity getProfileByID(Integer id);
    UserProfileEntity getByFullName(String fullName);
    UserProfileEntity getBlockedID(Integer userID);
}