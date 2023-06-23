package com.example.basicfunctions01.controller;

import com.example.basicfunctions01.entity.Item;
import com.example.basicfunctions01.service.IUserService;
import com.example.basicfunctions01.service.ItemService;
import com.example.basicfunctions01.util.JSONResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.example.basicfunctions01.controller.BaseController.OK;

@RestController
public class ItemController {

        @Autowired
        private ItemService itemService;

        //取得所有商品列表

    @GetMapping("/items")
    public JSONResult<List<Item>> getAllItems(){
        List<Item> itemList = itemService.getItems(); //list 會回傳商品列表回來

        return new JSONResult<List<Item>>(OK, itemList);
    }



}


//        @GetMapping("/items")
//        public ResponseEntity<List<Item>> getItems(){
//            List<Item> itemList = itemService.getItems(); //list 會回傳商品列表回來
//
//            return ResponseEntity.status(HttpStatus.OK).body(itemList);
//        }
