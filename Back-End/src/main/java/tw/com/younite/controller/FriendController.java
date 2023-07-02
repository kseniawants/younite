package tw.com.younite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tw.com.younite.service.inter.IFriendService;
import tw.com.younite.util.JSONResult;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class FriendController extends BaseController {
    private static final int VIDEO_CHAT_INVITATION_ACCEPT = 2;
    private static final int VOICE_CHAT_INVITATION_ACCEPT = 8;
    private static final int IMAGE_INVITATION_ACCEPT = 32;

    @Autowired
    IFriendService iFriendService;

    @PutMapping("/users/invitation/{friendID}/{status}")
    public JSONResult<Void> setInvitationStatus(HttpSession session,
                                                @PathVariable Integer status,
                                                @PathVariable Integer friendID) {
        Integer userID = getIDFromSession(session);
        iFriendService.setInvitationStatus(userID, friendID, status);
        switch (status) {
            case VIDEO_CHAT_INVITATION_ACCEPT -> iFriendService.setVideoChatFunction(userID, friendID);
            case VOICE_CHAT_INVITATION_ACCEPT -> iFriendService.setVoiceChatFunction(userID, friendID);
            case IMAGE_INVITATION_ACCEPT -> iFriendService.setImageSendFunction(userID, friendID);
        }

        return new JSONResult<>(OK);
    }

    @GetMapping("/users/friends")
    public JSONResult<List<Integer>> getFriendList(HttpSession session) {
        Integer userID = getIDFromSession(session);
        List<Integer> data = iFriendService.getFriendsList(userID);
        return new JSONResult<>(OK, data);
    }

    @GetMapping("/users/friends/{userID}")
    public JSONResult<List<Integer>> getUsersFriendList(@PathVariable Integer userID) {
        List<Integer> data = iFriendService.getFriendsList(userID);
        return new JSONResult<>(OK, data);
    }
}
