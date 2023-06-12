package com.example.basicfunctions01.entity;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

@Data
public class User extends BaseEntity implements Serializable {
    private Integer id;
    private String username;
    private String salt;
    private String email;
    private String phone;
    private String password;
    private Boolean thirdPartyLogin;
    private String googleUser;
    private String facebookUser;
    private Date vipExpiry;

}
