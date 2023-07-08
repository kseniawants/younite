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
import tw.com.younite.service.exception.InterestsNotFoundException;
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
        int listSize = interests.size();
        if (listSize != 0) {
            for (String interest: interests) {
                InterestEntity interestEntity = new InterestEntity();
                interestEntity.setUserID(userID);
                interestEntity.setInterest(interest);
                interestMapper.addInterest(interestEntity);
            }
        } else {
            throw new InterestException("");
        }
    }

    @Override
    public List<String> getInterests(Integer userID) {
        List<InterestEntity> interestEntitiesList = interestMapper.getInterests(userID);
        if (interestEntitiesList == null) {
            throw new InterestsNotFoundException("");
        }
        List<String> interestsList = new ArrayList<>();
        for (InterestEntity interestEntity: interestEntitiesList) {
            interestsList.add(interestEntity.getInterest());
        }
        return interestsList;
    }

    @Override
    public void removeInterests(Integer userID) {
        Integer rows = interestMapper.removeInterests(userID);
    }
}
