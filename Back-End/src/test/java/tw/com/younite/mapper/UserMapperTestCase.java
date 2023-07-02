package tw.com.younite.mapper;

import tw.com.younite.entity.UserEntity;
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
        UserEntity user = new UserEntity();
        user.setId(1);
        user.setEmail("david.liu0206@gmail.com");
        user.setUsername("David");
        user.setPassword("aaa520520");
        Integer result = userMapper.register(user);
        System.out.println("result = " + result);
    }

    @Test
    public void testRegisterByPAuth() {
        UserEntity user = new UserEntity();
        user.setId(102);
        user.setEmail("qoqo850206123@gmail.com");
        user.setUsername("David123");
        user.setGoogleUser("1");
        user.setThirdPartyLogin(true);
        Integer result = userMapper.registerByOAuth(user);
        System.out.println("OAuth result = " + result);
    }

    @Test
    public void testGetByUsername() {
        UserEntity user = userMapper.getByUsername("David");
        System.out.println("user = " + user);
    }

    @Test
    public void testUpdatePasswordByID() {
        Integer result  = userMapper.updatePasswordByID(43, "DDD", new Date());
        System.out.println("result = " + result);
    }

    @Test
    public void testGetByID() {
        UserEntity user = userMapper.getUserByID(44);
        System.out.println("user = " + user);
    }
}
