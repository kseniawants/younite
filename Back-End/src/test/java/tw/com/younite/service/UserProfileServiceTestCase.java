package tw.com.younite.service;

import tw.com.younite.entity.UserProfileEntity;
import tw.com.younite.service.inter.IUserProfileService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
public class UserProfileServiceTestCase {
    @Autowired
    private IUserProfileService iUserProfileService;

    @Test
    public void testResetProfileService() {
        UserProfileEntity userProfile = iUserProfileService.getUserProfile(98);
        Integer id = userProfile.getUserId();
        userProfile.setFullName("哈林老師");
        userProfile.setSexualOrientation("Lesbian");
        userProfile.setUserId(id);
        iUserProfileService.resetUserProfile(userProfile);
    }


}
