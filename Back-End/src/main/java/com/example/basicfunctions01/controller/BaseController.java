package com.example.basicfunctions01.controller;

import com.example.basicfunctions01.service.exception.*;
import com.example.basicfunctions01.service.uploadException.*;
import com.example.basicfunctions01.util.JSONResult;
import org.apache.tomcat.util.http.fileupload.impl.FileUploadIOException;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpSession;

public class BaseController {
    public static final int OK = 200;

    //網頁註冊頁面產生的異常，會被此控制器所攔截，方法的返回值直接傳遞給前端。
    @ExceptionHandler(ServiceException.class)
    public JSONResult<Void> handleException(Throwable e) {
        JSONResult<Void> result = new JSONResult<>();
        if (e instanceof UsernameDuplicatedException) {
            result.setState(4000);
            result.setMessage("帳號已被註冊");
        } else if (e instanceof EmailDuplicatedException) {
            result.setState(4000);
            result.setMessage("信箱已被註冊");
        } else if (e instanceof PhoneDuplicatedException) {
            result.setState(4000);
            result.setMessage("手機已被註冊");
        } else if (e instanceof FullNameDuplicatedException) {
            result.setState(4001);
            result.setMessage("暱稱重複!");
        } else if (e instanceof UserNotFoundException) {
            result.setState(5001);
            result.setMessage("帳號不存在!");
        } else if (e instanceof PasswordNotMatchException) {
            result.setState(5002);
            result.setMessage("密碼錯誤!");
        } else if (e instanceof RegisterException) {
            result.setState(5000);
            result.setMessage("伺服器異常，無法註冊，請稍後再嘗試! ");
        } else if (e instanceof UpdateException) {
            result.setState(5001);
            result.setMessage("更新數據時產生未知的錯誤!");
        } else if (e instanceof InsertProfileException) {
            result.setState(5003);
            result.setMessage("伺服器異常，無法新增個人資料，請稍後再嘗試!");
        } else if (e instanceof FileTypeException) {
            result.setState(6001);
            result.setMessage("文件格式錯誤，無法上傳");
        } else if (e instanceof FileEmptyException) {
            result.setState(6002);
            result.setMessage("文件為空，無法上傳");
        } else if (e instanceof FileSizeException) {
            result.setState(6003);
            result.setMessage("文件檔案過大，無法上傳");
        } else if (e instanceof FileStateException) {
            result.setState(6004);
            result.setMessage("文件狀態異常");
        } else if (e instanceof FileUploadIOException) {
            result.setState(6005);
            result.setMessage("文件IO異常");
        } else if (e instanceof FileUploadException) {
            result.setState(6006);
            result.setMessage("文件上傳時發生異常!");
        }
        return result;
    }

    /**
     * 獲取session物件中的full name
     * @param session session物件
     * @return 當前登陸用戶的full name的值
     * */
    protected final String getUsernameFromSession (HttpSession session) {
        //TODO: getAttribute改成full name.
        return session.getAttribute("username").toString();
    }

    protected final Integer getIDFromSession (HttpSession session) {
        return Integer.valueOf(session.getAttribute("id").toString());
    }
}
