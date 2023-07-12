package tw.com.younite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tw.com.younite.entity.FriendMsgTempEntity;
import tw.com.younite.entity.FriendsProfileEntity;
import tw.com.younite.service.inter.IFriendProfileService;
import tw.com.younite.service.inter.IFriendTempService;
import tw.com.younite.util.JSONResult;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("/getProfile")
public class FriendProfileController extends BaseController{
    @Autowired
    IFriendProfileService ifriendProfileService;
    @Autowired
    IFriendTempService iFriendTempService;
    @GetMapping("/friendList")
    public ResponseEntity<List<FriendsProfileEntity>> getProfiles(HttpSession session){
        Integer userid =(Integer) session.getAttribute("id");
        List<FriendsProfileEntity> data= ifriendProfileService.getFriendProfile(userid);
        List<FriendsProfileEntity> data2= ifriendProfileService.getFriendProfile2(userid);
        data.addAll(data2);
        return ResponseEntity.ok(data);
    }
    @PutMapping("/setLast")
    public JSONResult<Void> setLast(@RequestBody FriendMsgTempEntity msgTempEntity){
        iFriendTempService.setLastMsg(msgTempEntity);
        return new JSONResult<>(OK);
    }
    @GetMapping("/getRoom/{id}/{id2}")
    public JSONResult<Integer> getRoom(HttpSession session, @PathVariable("id") Integer id, @PathVariable("id2") Integer id2){
         FriendMsgTempEntity friendMsgTempEntity=iFriendTempService.getRoom(id,id2).get(0);
         JSONResult<Integer> jsonResult=new JSONResult<>();
         jsonResult.setData(friendMsgTempEntity.getId());
         jsonResult.setState(OK);
         return jsonResult;
    }
    @PostMapping("/createRoom")
    public JSONResult<Integer> createRoom(@RequestBody FriendMsgTempEntity msgTempEntity){
        iFriendTempService.createRoom(msgTempEntity);
        JSONResult<Integer> jsonResult =new JSONResult<>();
        jsonResult.setState(OK);
        return jsonResult;
    }
}
