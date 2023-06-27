package tw.com.younite.entity;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;


import java.io.Serializable;
import java.util.Date;

@Data
public class UserProfileEntity extends UserEntity implements Serializable {
    private Integer profileId;
    private Integer userId;
    private String fullName;
    private String profilePic;
    private String gender;
    private String  sexualOrientation;
    private String preferredGender;
    private String datingGoal;
    private String selfIntro;
    private String location;
    private String blockId;
    private String profileAvatar;
    private String voiceIntro;
    private String professions;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date birthday;
}
