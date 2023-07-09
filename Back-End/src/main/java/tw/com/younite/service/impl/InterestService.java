package tw.com.younite.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tw.com.younite.entity.InterestEntity;
import tw.com.younite.entity.UserProfileEntity;
import tw.com.younite.mapper.InterestMapper;
import tw.com.younite.mapper.UserProfileMapper;
import tw.com.younite.service.exception.InterestException;
import tw.com.younite.service.exception.InterestsNotFoundException;
import tw.com.younite.service.inter.IInterestService;

import java.util.*;

@Service
public class InterestService implements IInterestService {

    @Autowired
    InterestMapper interestMapper;

    @Autowired
    UserProfileMapper userProfileMapper;

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

    @Override
    public Map<UserProfileEntity, List<String>> findUserProfilesByInterestss(Integer userID) {
        Map<UserProfileEntity, List<String>> mutualInterestMap = new HashMap<>();
        //取得現在使用者想看的性別
        String preferredGender = userProfileMapper.getProfileByID(userID).getPreferredGender();
        //取得現在使用者的興趣
        List<InterestEntity> interestEntityList = interestMapper.getInterests(userID);

        for (InterestEntity interestEntity : interestEntityList) {
            List<InterestEntity> resultList = interestMapper.findUsersByInterests(interestEntity.getInterest(), userID);

            if (!resultList.isEmpty()) {
                //查詢結果加入Map中
                for (InterestEntity result : resultList) {
                    UserProfileEntity userProfile = userProfileMapper.getProfileByID(result.getUserID());
                    //檢查性別是否符合使用者偏好
                    if (Objects.equals(userProfile.getGender(), preferredGender)) {
                        String interest = result.getInterest();
                        mutualInterestMap.computeIfAbsent(userProfile, k -> new ArrayList<>()).add(interest);
                    }

                }
            }
        }
        return mutualInterestMap;
    }
public List<Map<String, Object>> findUserProfilesByInterests(Integer userID) {
    List<Map<String, Object>> userProfiles = new ArrayList<>();
    // 取得现在使用者想看的性别
    String preferredGender = userProfileMapper.getProfileByID(userID).getPreferredGender();
    // 取得现在使用者的兴趣
    List<InterestEntity> interestEntityList = interestMapper.getInterests(userID);

    Set<Integer> addedUserIDs = new HashSet<>(); // 用于记录已添加的用户ID

    for (InterestEntity interestEntity : interestEntityList) {
        List<InterestEntity> resultList = interestMapper.findUsersByInterests(interestEntity.getInterest(), userID);

        if (!resultList.isEmpty()) {
            // 查询结果加入List中
            for (InterestEntity result : resultList) {
                UserProfileEntity userProfile = userProfileMapper.getProfileByID(result.getUserID());
                // 检查性别是否符合使用者偏好
                if (Objects.equals(userProfile.getGender(), preferredGender)) {
                    Integer userProfileID = userProfile.getUserId();
                    if (!addedUserIDs.contains(userProfile.getUserId())) {
                        Map<String, Object> userProfileMap = new HashMap<>();
                        userProfileMap.put("userID", userProfile.getUserId());
                        userProfileMap.put("profileAvatar", userProfile.getProfileAvatar());
                        userProfileMap.put("age", calculateAge(userProfile.getBirthday()));
                        userProfileMap.put("interests", parseInterests(result.getInterest()));
                        userProfiles.add(userProfileMap);
                        addedUserIDs.add(userProfile.getUserId());
                    } else {
                        for (Map<String, Object> userProfileMap : userProfiles) {
                            Integer existingUserID = (Integer) userProfileMap.get("userID");
                            if (existingUserID.equals(userProfileID)) {
                                Map existingInterestMap  = (Map) userProfileMap.get("interests");
                                existingInterestMap.put("interests", parseInterests(result.getInterest()));
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
    return userProfiles;
}

    // 解析兴趣列表
    private List<String> parseInterests(String interestString) {
        // 移除括号和空格，然后分割成兴趣列表
        String[] interests = interestString.replaceAll("[\\[\\]]", "").split(", ");
        return Arrays.asList(interests);
    }

    // 计算年龄
    private int calculateAge(Date birthday) {
        Calendar birthDate = Calendar.getInstance();
        birthDate.setTime(birthday);
        Calendar currentDate = Calendar.getInstance();

        int age = currentDate.get(Calendar.YEAR) - birthDate.get(Calendar.YEAR);
        if (currentDate.get(Calendar.MONTH) < birthDate.get(Calendar.MONTH) ||
                (currentDate.get(Calendar.MONTH) == birthDate.get(Calendar.MONTH) &&
                        currentDate.get(Calendar.DAY_OF_MONTH) < birthDate.get(Calendar.DAY_OF_MONTH))) {
            age--;
        }
        return age;
    }

}
