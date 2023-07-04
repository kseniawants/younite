package com.example.basicfunctions01.mapper;

import com.example.basicfunctions01.entity.Item;
import com.example.basicfunctions01.entity.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@SpringBootTest
@RunWith(SpringRunner.class)
public class ItemMapperTestCase {
    @Autowired
    private ItemMapper itemMapper;
    @Test
    public void testGetByUsername() {
        List<Item> item = itemMapper.selectAll();
        System.out.println("item = " + item);
    }
}
