package com.example.basicfunctions01.config;

import com.example.basicfunctions01.interceptor.LoginInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.ArrayList;
import java.util.List;


/**
 * 登入攔截器註冊
 */
@Configuration
public class LoginInterceptorConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        //註冊自訂的interceptor
        HandlerInterceptor interceptor = new LoginInterceptor();

        //白名單(用戶可隨意訪問的url), param: List
        List<String> whiteLists = new ArrayList<>();
        whiteLists.add("/js/**");
        whiteLists.add("/style/**");
        whiteLists.add("/register.html");
        whiteLists.add("/login.html");
        whiteLists.add("/index.html");
        whiteLists.add("/register");
        whiteLists.add("/login");
        whiteLists.add("/items");
        whiteLists.add("/store.html");


        //黑名單(用戶不可隨意訪問的url), param: String
        registry.addInterceptor(interceptor)
                .addPathPatterns("/**")  //指定被攔截的url
                .excludePathPatterns(whiteLists);
    }
}
