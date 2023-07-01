package tw.com.younite.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tw.com.younite.entity.FriendEntity;
import tw.com.younite.mapper.FriendMapper;
import tw.com.younite.service.exception.NoMatchedException;
import tw.com.younite.service.inter.IFriendService;

import java.util.ArrayList;
import java.util.List;

@Service
public class FriendService implements IFriendService {
    @Autowired
    FriendMapper friendMapper;

    @Override
    public void insertFriend(FriendEntity friendEntity) {
        friendMapper.insertFriend(friendEntity);
    }

    @Override
    public List<Integer> getFriendsList(Integer userID) {
        List<FriendEntity> friendsList = friendMapper.getFriend(userID);
        List<Integer> result = new ArrayList<>();
        if (friendsList == null) {
            throw new NoMatchedException("");
        }
        for (FriendEntity friend : friendsList) {
            result.add(friend.getSecondUserID());
        }
        return result;
    }

    @Override
    public void setInvitationSent(FriendEntity friendEntity) {

    }
}
