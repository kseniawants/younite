package com.example.basicfunctions01.mapper;

import com.example.basicfunctions01.entity.Item;

import java.util.List;

public interface ItemMapper {



    //從itemmapper返回方法名
    //查詢所有
    List<Item> selectAll();
}
