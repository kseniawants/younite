package tw.com.younite.service.inter;

import tw.com.younite.entity.UserProfile;

public interface IUserProfileService {
    void insertProfile(UserProfile userProfile);
    void resetUserProfile(UserProfile userprofile);
    UserProfile getUserProfile(Integer id);
}
