package com.example.basicfunctions01.entity;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;


import java.io.Serializable;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Data
public class UserProfile extends User implements Serializable {
    private Integer profileId;
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
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date birthday;

    public void setBirthdayString(String birthdayString) {
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
            this.birthday = dateFormat.parse(birthdayString);
        } catch (ParseException e) {
            // 转换失败时的处理逻辑
            e.printStackTrace();
        }
    }


}
