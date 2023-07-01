package tw.com.younite.mapper;
import tw.com.younite.entity.FriendEntity;

import java.util.List;

public interface FriendMapper {
    Integer insertFriend(FriendEntity friendEntity);

    Integer setInvitationSent(FriendEntity friendEntity);

    List<FriendEntity> getFriend(Integer id);
    FriendEntity getSpecificFriend(Integer firstUserID, Integer secondUserID);
}
