package tw.com.younite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import tw.com.younite.service.inter.IFriendService;
import tw.com.younite.util.JSONResult;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class FriendController extends BaseController {
    @Autowired
    IFriendService iFriendService;
    @GetMapping("/users/friends")
    public JSONResult<List<Integer>> getFriendList(HttpSession session) {
        Integer userID = getIDFromSession(session);
        List<Integer> data = iFriendService.getFriendsList(userID);
        return new JSONResult<>(OK, data);
    }

    @GetMapping("/users/friends/{userID}")
    public JSONResult<List<Integer>> getUsersFriendList (@PathVariable Integer userID) {
        List<Integer> data = iFriendService.getFriendsList(userID);
        return new JSONResult<>(OK, data);
    }
}
