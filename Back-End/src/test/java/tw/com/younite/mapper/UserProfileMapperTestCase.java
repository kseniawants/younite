package tw.com.younite.mapper;

import tw.com.younite.entity.UserProfile;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootTest
@RunWith(SpringRunner.class)
public class UserProfileMapperTestCase {
    @Autowired
    private UserMapper userMapper;

    @Test
    public void testInsertProfile() {
        UserProfile userProfile = new UserProfile();
        userProfile.setProfileId(1);
        userProfile.setId(2);
        userProfile.setBirthday(new Date());
        userProfile.setGender("Female");
        userProfile.setFullName("Rita");
        Integer result = userMapper.insertProfile(userProfile);
        System.out.println("result = " + result);
        System.out.println("userProfile = " + userProfile);
    }

    @Test
    public void testGetProfileByID() {
        UserProfile userProfile = userMapper.getProfileByID(98);
        System.out.println("userProfile = " + userProfile);
    }

    @Test
    public void testUpdateProfileByID() throws ParseException {
        UserProfile userProfile = userMapper.getProfileByID(98);
        Integer id = userProfile.getUserId();
        userProfile.setFullName("Hello你好嗎");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date parsedDate = dateFormat.parse("1996-02-06");
        userProfile.setBirthday(parsedDate);
        userProfile.setDatingGoal("Meet husband!");
        userProfile.setGender("Female");
        userProfile.setSexualOrientation("Straight");
        userProfile.setLocation("Taichung");
        userProfile.setSelfIntro("");
        userProfile.setProfileAvatar("/avatar/cat.jpg");
        userProfile.setUserId(id);
        userMapper.updateUserProfileByID(userProfile);
        System.out.println("userProfile = " + userProfile);
    }

    @Test
    public void testInsertProfileWrong() {
        UserProfile userProfile = new UserProfile();
        userProfile.setProfileId(2);
        userProfile.setId(3);
        userProfile.setBirthday(new Date());
        userProfile.setGender("Male");
        userProfile.setFullName("Rex");
        Integer result = userMapper.insertProfile(userProfile);
        System.out.println("result = " + result);
        System.out.println("userProfile = " + userProfile);
    }
}
