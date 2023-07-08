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

import java.util.*;

@SpringBootTest
@RunWith(SpringRunner.class)
public class InterestMapperTestCase {
    @Autowired
    InterestMapper interestMapper;

    @Test
    public void testaddInterest() throws JsonProcessingException {
        InterestEntity interest = new InterestEntity();
        interest.setUserID(165);
        String interestsString = "游泳,跑步,爬山";
        interest.setInterest(interestsString);
        interestMapper.addInterest(interest);
    }

    @Test
    public void testGetInterests() {
        List<InterestEntity> interests = interestMapper.getInterests(165);
        System.out.println("interests = " + interests);
    }

//    @Test
//    public void testGetUsersByInterests() {
//        String interests = interestMapper.getInterests(292).getInterest();
//        String[] interestArray = interests.replaceAll("\\[|\\]", "").split(", ");
//        List<String> list = Arrays.asList(interestArray);
//        List<InterestEntity> result = new ArrayList<>();
//        Set<InterestEntity> addedInterestEntity = new HashSet<>();
//        System.out.println("Arrays.asList(interestArray) = " + Arrays.asList(interestArray));
//        for (String interest : list) {
//            List<InterestEntity> interestResult = interestMapper.findUsersByInterests(interest);
//            for (InterestEntity entity: interestResult) {
//                if (!addedInterestEntity.contains(entity)) {
//                    addedInterestEntity.add(entity);
//                }
//            }
//        }
//        System.out.println("addedInterestEntity = " + addedInterestEntity);
//    }
}
