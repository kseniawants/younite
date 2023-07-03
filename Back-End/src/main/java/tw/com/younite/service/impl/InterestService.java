package tw.com.younite.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tw.com.younite.entity.InterestEntity;
import tw.com.younite.mapper.InterestMapper;
import tw.com.younite.service.exception.InterestException;
import tw.com.younite.service.inter.IInterestService;

import java.util.List;

@Service
public class InterestService implements IInterestService {


    @Autowired
    InterestMapper interestMapper;
    @Override
    public void setInterests(Integer userID, List<String> interests) {
        InterestEntity interestEntity = new InterestEntity();
        interestEntity.setUserID(userID);

        ObjectMapper objectMapper = new ObjectMapper();
        ObjectNode json = objectMapper.createObjectNode();
        ArrayNode interestsArray = objectMapper.createArrayNode();
        for (String interest : interests) {
            ObjectNode interestJson = objectMapper.createObjectNode();
            interestJson.put("interest", interest);
            interestsArray.add(interestJson);
        }
        json.set("interests", interestsArray);
        String jsonString;
        try {
            jsonString = objectMapper.writeValueAsString(json);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        interestEntity.setInterest(jsonString);

        Integer rows = interestMapper.addInterest(interestEntity);
        if (rows != 1) {
            throw new InterestException("服务器异常，无法新增兴趣！");
        }
    }

    @Override
    public List<Integer> getInterests(Integer userID) {
        return null;
    }
}
