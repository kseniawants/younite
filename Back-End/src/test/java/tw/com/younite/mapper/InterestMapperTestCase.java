package tw.com.younite.mapper;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import tw.com.younite.entity.InterestEntity;
import tw.com.younite.entity.UserProfileEntity;

@SpringBootTest
@RunWith(SpringRunner.class)
public class InterestMapperTestCase {
    @Autowired
    InterestMapper interestMapper;
    @Test
    public void testInterest() throws JsonProcessingException {
        InterestEntity interest = new InterestEntity();
        interest.setUserID(165);
        String interestsString = "游泳,跑步,爬山";
        interest.setInterest(interestsString);
        interestMapper.addInterest(interest);
    }

    @Test
    public void testGetInterests() {
        InterestEntity interests = interestMapper.getInterests(165);
        System.out.println("interests = " + interests);
        System.out.println("result = " + interests.getInterest());

    }
}
