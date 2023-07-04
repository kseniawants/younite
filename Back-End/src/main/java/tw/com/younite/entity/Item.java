package com.example.basicfunctions01.entity;

import lombok.Data;

import java.util.List;

@Data
//Data 涵蓋 getter setter toString
public class Item {

    private Integer id;
    private String itemName;
    private Integer price;

}

//    @Override
//    public String toString() {
//        return "Item{" +
//                "id=" + id +
//                ", itemName='" + itemName + '\'' +
//                ", price=" + price +
//                ", valid=" + valid +
//                '}';
//    }
//}
