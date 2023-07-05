package tw.com.younite.entity;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
//Data 涵蓋 getter setter toString
public class OrdersEntity {

    private Integer id;
    private Integer userId;
    private Integer itemId;
    private Integer amount;
    private Boolean unlocked;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date purchased;
    private String mTradeNo;



}

