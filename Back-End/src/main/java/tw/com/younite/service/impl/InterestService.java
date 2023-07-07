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

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class InterestService implements IInterestService {


    @Autowired
    InterestMapper interestMapper;
    @Override
    public void setInterests(Integer userID, List<String> interests) {
        InterestEntity interestEntity = new InterestEntity();
        interestEntity.setUserID(userID);
        String str = interests.toString();
        interestEntity.setInterest(str);
        Integer rows = interestMapper.addInterest(interestEntity);
        if (rows != 1) {
            throw new InterestException("");
        }
    }

    @Override
    public List<String> getInterests(Integer userID) {
        InterestEntity interestEntity = interestMapper.getInterests(userID);
        String hobbiesString = interestEntity.getInterest();
        hobbiesString = hobbiesString.substring(1, hobbiesString.length() - 1);
        String[] hobbiesArray = hobbiesString.split(", ");
        return Arrays.asList(hobbiesArray);
    }
}
