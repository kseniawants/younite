package tw.com.younite.util;

import org.springframework.beans.factory.annotation.Autowired;
import tw.com.younite.entity.UserProfileEntity;
import tw.com.younite.service.inter.IInterestService;
import tw.com.younite.service.inter.IUserLikeService;

import java.util.List;
import java.util.Map;

public class RecommendationUtil {
    public static final int THRESHOLD = 10;

    @Autowired
    IUserLikeService likeService;

    @Autowired
    IInterestService interestService;


//    @Autowired
//
//    public List<Map<String, Object>> recommendation(Integer userID) {
//        int likedSize = likeService.getLikedUserList(userID).size();
//        if (likedSize <= THRESHOLD) {
//            return interestService.findUserProfilesByInterests(userID);
//        }
//    }
}
