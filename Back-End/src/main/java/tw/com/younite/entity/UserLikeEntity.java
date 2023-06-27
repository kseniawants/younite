package tw.com.younite.entity;

import com.fasterxml.jackson.databind.ser.Serializers;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class UserLikeEntity implements Serializable {
    private String id;
    private Integer likedUserId;
    private Integer userID;
    private Date likedAt;
}
