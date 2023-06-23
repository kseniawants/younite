package com.example.basicfunctions01.service;

import com.example.basicfunctions01.entity.Item;
import com.example.basicfunctions01.mapper.ItemMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@SpringBootTest
@RunWith(SpringRunner.class)
public class ItemServiceTestCase {

    @Autowired
    private ItemService itemService;
//    private ItemMapper itemMapper;

    @Test
    public void test() {

        List<Item> a = itemService.getItems();

        System.out.println("item = " + a);


    }

}
