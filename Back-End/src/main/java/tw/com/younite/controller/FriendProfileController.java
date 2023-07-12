package tw.com.younite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tw.com.younite.entity.FriendsProfileEntity;
import tw.com.younite.service.inter.IFriendProfileService;

import java.util.List;

@RestController
@RequestMapping("/getProfile")
public class FriendProfileController {
    @Autowired
    IFriendProfileService ifriendProfileService;
    @GetMapping("/{id}")
    public ResponseEntity<List<FriendsProfileEntity>> getProfiles(@PathVariable("id") Integer userid){
       List<FriendsProfileEntity> data= ifriendProfileService.getFriendProfile(userid);
       return ResponseEntity.ok(data);
    }
}
