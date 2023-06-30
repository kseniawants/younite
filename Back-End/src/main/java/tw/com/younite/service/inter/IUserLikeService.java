package tw.com.younite.service.inter;

import org.apache.catalina.User;
import tw.com.younite.entity.UserLikeEntity;
import java.util.List;

public interface IUserLikeService {
    void insertLikedUser(UserLikeEntity userLikeEntity);
    List<Integer> getLikedUserList(Integer userID);
    void deleteLikedUser(Integer userID, Integer likedUserID);
}
