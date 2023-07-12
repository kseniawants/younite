package tw.com.younite.service.inter;

import tw.com.younite.entity.FriendsProfileEntity;

import java.util.List;

public interface IFriendProfileService {
    List<FriendsProfileEntity> getFriendProfile(Integer userid);
}
