package tw.com.younite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tw.com.younite.entity.FriendEntity;
import tw.com.younite.entity.UserLikeEntity;
import tw.com.younite.service.exception.DuplicatedLikedUserException;
import tw.com.younite.service.exception.FriendExceedLimitException;
import tw.com.younite.service.exception.UserNotFoundException;
import tw.com.younite.service.inter.IFriendService;
import tw.com.younite.service.inter.IUserLikeService;
import tw.com.younite.service.inter.IUserService;
import tw.com.younite.util.JSONResult;

import java.util.List;
import java.util.Date;
import javax.servlet.http.HttpSession;

@RestController
@CrossOrigin(origins = "*")
public class UserLikeController extends BaseController {

    @Autowired
    IUserLikeService iUserLikeService;

    @Autowired
    IUserService iUserService;

    @Autowired
    IFriendService iFriendService;

    @PostMapping("/users/like")
    public JSONResult<Void> insertLikedUsers(HttpSession session,
                                             @RequestBody UserLikeEntity userLikeEntity) {
        Integer likedUserId = userLikeEntity.getLikedUserID();
        Integer userID = getIDFromSession(session);
        if (iUserService.getUserByID(likedUserId) == null) {
            throw new UserNotFoundException("找不到用戶資料");
        }
        if (iUserLikeService.getLikedUserList(userID).contains(likedUserId)) {
            throw new DuplicatedLikedUserException("喜歡的用戶已存在");
        }
        userLikeEntity.setUserID(userID);
        userLikeEntity.setLikedAt(new Date());
        iUserLikeService.insertLikedUser(userLikeEntity);

        //好友配對
        List<Integer> checkList = iUserLikeService.getLikedUserList(likedUserId);
        Integer friendListSize = iFriendService.getFriendsList(userID).size();
        int friendMaximum = 25;
        //TODO: 確認count的方法
        int count = 1;
        if (iUserService.getUserByID(userID).getVipExpiry().after(new Date())) {
            friendMaximum += 10 * count;
        }
        if (checkList.contains(userID)) {
            if (friendListSize == friendMaximum) {
                throw new FriendExceedLimitException("");
            }
            for (int i = 0; i < 2; i++) {
                FriendEntity friendEntity = new FriendEntity();
                friendEntity.setFirstUserID(i == 0? userID : likedUserId);
                friendEntity.setSecondUserID(i == 0? likedUserId : userID);
                friendEntity.setIsMatched(true);
                friendEntity.setCreateAt(new Date());
                iFriendService.insertFriend(friendEntity);
            }

        }

        return new JSONResult<>(OK, "新增資料成功");
    }

    @GetMapping("/users/getLikedUsers/{userID}")
    public JSONResult<List<Integer>> getLikedUsers(@PathVariable Integer userID) {
        List<Integer> data = iUserLikeService.getLikedUserList(userID);
        return new JSONResult<>(OK, data);
    }

    @GetMapping("/users/getLikedUsers")
    public JSONResult<List<Integer>> getLikedUsers(HttpSession session) {
        Integer userID = getIDFromSession(session);
        List<Integer> data = iUserLikeService.getLikedUserList(userID);
        return new JSONResult<>(OK, data);
    }

    @GetMapping("/users/likesTracker/{likedUserID}")
    public JSONResult<List<Integer>> likesTracker(@PathVariable Integer likedUserID) {
        List<Integer> data = iUserLikeService.likesTracker(likedUserID);
        return new JSONResult<>(OK, data);
    }

    @DeleteMapping("/users/removeLikedUsers")
    public JSONResult<Void> removeLikedUsers(HttpSession session, Integer likedUserID) {
        Integer userID = getIDFromSession(session);
        iUserLikeService.deleteLikedUser(userID, likedUserID);
        return new JSONResult<>(OK, "已成功自喜歡列表移除您所選的用戶");
    }

    @DeleteMapping("/users/removeLikedUsers/{userID}/{likedUserID}")
    public JSONResult<Void> removeLikedUsersAdmin(@PathVariable Integer userID
            , @PathVariable Integer likedUserID) {
        iUserLikeService.deleteLikedUser(userID, likedUserID);
        return new JSONResult<>(OK, "已成功自喜歡列表移除您所選的用戶");
    }

}
