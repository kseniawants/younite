package tw.com.younite.entity;

import lombok.Data;

@Data
public class FriendsProfileEntity {
    private Integer userid;
    private String fullName;
    private String lastMessage;
    private String profileAvatar;
    private Integer unread;
}
