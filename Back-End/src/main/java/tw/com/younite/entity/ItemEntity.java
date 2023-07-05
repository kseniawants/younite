package tw.com.younite.entity;

import lombok.Data;

@Data
//Data 涵蓋 getter setter toString
public class ItemEntity {

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
