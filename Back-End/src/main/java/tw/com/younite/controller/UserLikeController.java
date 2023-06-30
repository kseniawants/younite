package tw.com.younite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tw.com.younite.entity.UserLikeEntity;
import tw.com.younite.service.exception.DuplicatedLikedUserException;
import tw.com.younite.service.exception.UserNotFoundException;
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
