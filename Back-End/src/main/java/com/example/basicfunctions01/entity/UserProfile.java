package com.example.basicfunctions01.entity;

import lombok.Data;


import java.io.Serializable;
import java.util.Date;

@Data
public class UserProfile extends User implements Serializable {
    private Integer profileId;
    private String fullName;
    private Date birthday;
    private String profilePic;
    private String gender;
    private String  sexualOrientation;
    private String preferredGender;
    private String datingGoal;
    private String selfIntro;
    private String location;
    private String blockId;
}
