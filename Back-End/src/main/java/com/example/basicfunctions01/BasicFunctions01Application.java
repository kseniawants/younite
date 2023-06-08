package com.example.basicfunctions01;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.basicfunctions01.mapper")
public class BasicFunctions01Application {

	public static void main(String[] args) {
		SpringApplication.run(BasicFunctions01Application.class, args);
	}

}
