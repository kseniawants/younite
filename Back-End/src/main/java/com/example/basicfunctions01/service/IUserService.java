package com.example.basicfunctions01.service;

import com.example.basicfunctions01.entity.User;
import com.example.basicfunctions01.entity.UserProfile;


public interface IUserService {
    /** register interface*/
    void reg(User user);
    void insertProfile(UserProfile userProfile);
    User login(User user);
    void changePassword(Integer id, String username, String oldPassword, String newPassword);


}
