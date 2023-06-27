package tw.com.younite.service.inter;

import tw.com.younite.entity.UserProfileEntity;

public interface IUserProfileService {
    void insertProfile(UserProfileEntity userProfile);
    void resetUserProfile(UserProfileEntity userprofile);
    UserProfileEntity getUserProfile(Integer id);
}
