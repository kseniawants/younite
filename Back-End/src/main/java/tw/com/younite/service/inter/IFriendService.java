package tw.com.younite.service.inter;
import tw.com.younite.entity.FriendEntity;

import java.util.List;

public interface IFriendService {
    void insertFriend(FriendEntity friendEntity);
    void setInvitationSent(FriendEntity friendEntity);
    List<Integer> getFriendsList(Integer userID);
}
