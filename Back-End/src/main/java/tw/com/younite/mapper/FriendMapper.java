package tw.com.younite.mapper;
import tw.com.younite.entity.FriendEntity;
import tw.com.younite.entity.FriendWithFullName;

import java.util.List;

public interface FriendMapper {
    Integer insertFriend(FriendEntity friendEntity);
    Integer setInvitationSent(FriendEntity friendEntity);
    Integer setInvitationAccept(FriendEntity friendEntity);
    Integer setInvitationStatus(FriendEntity friendEntity);
    Integer setVideoChatStatus(FriendEntity friendEntity);
    Integer setVoiceChatStatus(FriendEntity friendEntity);
    Integer setImageStatus(FriendEntity friendEntity);
    List<FriendEntity> getFriend(Integer id);
    FriendEntity getSpecificFriend(Integer firstUserID, Integer secondUserID);
    FriendEntity getInvitationStatus(Integer firstUserID,
                                     Integer secondUserID,
                                     Integer invitationStatus);

}
