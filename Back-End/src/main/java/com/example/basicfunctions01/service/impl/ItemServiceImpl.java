package com.example.basicfunctions01.service.impl;

import com.example.basicfunctions01.entity.Item;
import com.example.basicfunctions01.mapper.ItemMapper;
import com.example.basicfunctions01.mapper.UserMapper;
import com.example.basicfunctions01.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemServiceImpl implements ItemService {
    @Autowired
    private ItemMapper itemMapper;


    @Override
    public List<Item> getItems() {

        return itemMapper.selectAll();

    }
}
