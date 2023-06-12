package com.example.basicfunctions01.mapper;

import com.example.basicfunctions01.entity.User;
import com.example.basicfunctions01.entity.UserProfile;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

@SpringBootTest
@RunWith(SpringRunner.class)
public class UserMapperTestCase {

    @Autowired
    private UserMapper userMapper;

    @Test
    public void testRegister() {
        User user = new User();
        user.setId(1);
        user.setEmail("david.liu0206@gmail.com");
        user.setUsername("David");
        user.setPassword("aaa520520");
        Integer result = userMapper.register(user);
        System.out.println("result = " + result);
    }

    @Test
    public void testGetByUsername() {
        User user = userMapper.getByUsername("David");
        System.out.println("user = " + user);
    }

    @Test
    public void testUpdatePasswordByID() {
        Integer result  = userMapper.updatePasswordByID(43, "DDD", new Date());
        System.out.println("result = " + result);
    }

    @Test
    public void testGetByID() {
        User user = userMapper.getUserByID(44);
        System.out.println("user = " + user);
    }

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
