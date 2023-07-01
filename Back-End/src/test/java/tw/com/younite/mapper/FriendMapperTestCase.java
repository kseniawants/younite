package tw.com.younite.mapper;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import tw.com.younite.entity.FriendEntity;

import java.util.Date;
import java.util.List;

@SpringBootTest
@RunWith(SpringRunner.class)
public class FriendMapperTestCase {
    @Autowired
    FriendMapper friendMapper;

    @Test
    public void insertFriend() {
        FriendEntity friend = new FriendEntity();
        friend.setFirstUserID(127);
        friend.setSecondUserID(126);
        friend.setCreateAt(new Date());
        friend.setIsMatched(true);
        friendMapper.insertFriend(friend);
        System.out.println("friend = " + friend);
    }

    @Test
    public void getFriend() {
        List<FriendEntity> friend = friendMapper.getFriend(162);
        System.out.println("friend = " + friend);
    }

    @Test
    public void setInvitationSent() {
        FriendEntity friend = friendMapper.getSpecificFriend(164, 165);
        friend.setIsInvitationSent(true);
        friendMapper.setInvitationSent(friend);
    }

}
