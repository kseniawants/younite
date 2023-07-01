package tw.com.younite.entity;
import lombok.Data;

import java.util.Date;

@Data
public class FriendEntity {
    private Integer id;
    private Integer firstUserID;
    private Integer secondUserID;
    private Boolean isMatched;
    private Boolean isChatEnabled;
    private Boolean isVoiceChatEnabled;
    private Boolean isImageEnabled;
    private Boolean isInvitationSent;
    private Boolean isInvitationAccepted;
    private Date createAt;
}
