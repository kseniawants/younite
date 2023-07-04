package tw.com.younite.service.impl;

import tw.com.younite.entity.ItemEntity;
import tw.com.younite.entity.OrdersEntity;
import tw.com.younite.mapper.ItemMapper;
import tw.com.younite.mapper.OrdersMapper;
import tw.com.younite.service.inter.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class OrdersServiceImpl implements OrdersService {

    @Autowired
    private OrdersMapper ordersMapper;
    @Autowired
    private ItemMapper itemMapper;


    @Override
    public Integer createOrder(Integer userId, Integer itemId) {
        // 使用 Item Mapper 的方法獲取項目價格
        ItemEntity item = itemMapper.getItemPriceByItemId(itemId);
        Integer amount = item.getPrice().intValue();
        // 創建訂單
        OrdersEntity order = new OrdersEntity();
        order.setUserId(userId);
        order.setItemId(itemId);
        order.setAmount(amount);
        order.setUnlocked(false);
        order.setPurchased(new Date());

        ordersMapper.insertOrder(order);
        return order.getId();

    }


    @Override
    public void updateUnlocked(String mTradeNo, Boolean unlocked, Date purchased){
        ordersMapper.updateUnlocked( mTradeNo, unlocked, purchased);
    }

    @Override
    public Date updateVIP(OrdersEntity orders, Integer userId, Date expiry) {
        return null;
    }


}





//    @Override
//    public Integer getItemPriceByItemId(Integer itemId) {
//            return itemMapper.getItemPriceByItemId(itemId);
//        }
//    @Override
//    public void insertOrder(Orders order) {
//
//            order.setUnlocked(false);
//            Date date = new Date();
//            order.setPurchased(date);
//            ordersMapper.insertOrder(order);
//    }






