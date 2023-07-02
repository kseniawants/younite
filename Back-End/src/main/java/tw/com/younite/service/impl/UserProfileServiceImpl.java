package tw.com.younite.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import tw.com.younite.entity.UserProfileEntity;
import tw.com.younite.mapper.UserMapper;
import tw.com.younite.mapper.UserProfileMapper;
import tw.com.younite.service.exception.*;
import tw.com.younite.service.inter.IUserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserProfileServiceImpl implements IUserProfileService {
    @Autowired
    private UserProfileMapper userProfileMapper;

    @Autowired
    private UserMapper userMapper;

    @Override
    public void insertProfile(UserProfileEntity userProfile) {
        //檢查暱稱是否重複
        String fullName = userProfile.getFullName();
        if (userProfileMapper.getByFullName(fullName) != null) {
            throw new DuplicatedFullNameException("暱稱重複!");
        }
        Integer rows = userProfileMapper.insertProfile(userProfile);
        if (rows != 1) {
            throw new InsertProfileException("伺服器/資料庫異常!");
        }
    }

    @Override
    public UserProfileEntity getUserProfile(Integer id) {
        if (userMapper.getUserByID(id) == null) {
            throw new UserNotFoundException("使用者帳號不存在!");
        }
        return userProfileMapper.getProfileByID(id);
    }

    @Override
    public void resetUserProfile(UserProfileEntity userprofile) {
        Integer row = userProfileMapper.updateUserProfileByID(userprofile);
        if (row != 1) {
            throw new UpdateException();
        }
    }

    @Override
    public void blockUser(Integer userID, Integer blockedUserID) {
        UserProfileEntity userProfileEntity = userProfileMapper.getProfileByID(userID);
        if (userMapper.getUserByID(blockedUserID) == null) {
            throw new UserNotFoundException("欲封鎖的用戶不存在");
        }
        ObjectMapper objectMapper = new ObjectMapper();
        ObjectNode json = objectMapper.createObjectNode();
        json.put("blocked", blockedUserID);
        String jsonString = null;
        try {
            jsonString = objectMapper.writeValueAsString(json);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        userProfileEntity.setBlockId(jsonString);
        Integer rows = userProfileMapper.blockUser(userProfileEntity);
        if (rows != 1) {
            throw new BlockUserException("伺服器異常，無法封鎖用戶，請稍後再試!");
        }
    }

    @Override
    public List<Integer> getBlockedID(Integer userID) {
        UserProfileEntity userProfile = userProfileMapper.getProfileByID(userID);
        List<Integer> blockedUsersList = new ArrayList<>();
        String jsonString = userProfile.getBlockId();
        if (jsonString == null) {
            return blockedUsersList;
        }
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            JsonNode jsonArray = objectMapper.readTree(jsonString);
            for (JsonNode element: jsonArray) {
                if (element.has("blocked")) {
                    blockedUsersList.add(element.get("blocked").asInt());
                }
            }
            System.out.println("blockedUsersList = " + blockedUsersList);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return blockedUsersList;
    }

    @Override
    public void unblockUser(Integer userID, Integer unblockedUserID) {
        UserProfileEntity userProfileEntity = userProfileMapper.getProfileByID(userID);
        List<Integer> blockedList = getBlockedID(userID);
        if (blockedList == null)
            return;
        int index = blockedList.indexOf(unblockedUserID);
        if (index == -1) {
            throw new BlockedUserNotFoundException("用戶不存在");
        }
        userProfileEntity.setIndex(index);
        userProfileMapper.unblockUser(userProfileEntity);
    }
}
