package tw.com.younite.controller;

import tw.com.younite.service.inter.OrdersService;
import tw.com.younite.service.inter.PayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Date;

@RestController
public class PayController extends BaseController{
    @Autowired
    private OrdersService ordersService;
    @Autowired
    private PayService payService;
    @PostMapping("/orders")
    public String orders(HttpSession session, Integer itemId) {
        Integer userId = getIDFromSession(session);

        // 创建订单
        Integer orderId = ordersService.createOrder(userId, itemId);

        // 执行 ecpayCheckout
        String aioCheckOutOneTime = payService.ecpayCheckout(orderId);

        return aioCheckOutOneTime;
    }


    @PostMapping("/callback")
    public String ecpayReturn(HttpServletRequest request) {
        // 解析綠界回傳的參數
        String merchantID = request.getParameter("MerchantID");
        String merchantTradeNo = request.getParameter("MerchantTradeNo");
        String rtnCode = request.getParameter("RtnCode");
        String tradeDate = request.getParameter("TradeDate");


        System.out.println("merchantID = " + merchantID);
        System.out.println("merchantTradeNo = " + merchantTradeNo);
        System.out.println("rtnCode = " + rtnCode);
        System.out.println("tradeDate = " + tradeDate);

        // 根據回傳值進行相應的處理
        if (rtnCode.equals("1")) {
            System.out.println("success!");
            ordersService.updateUnlocked(merchantTradeNo, Boolean.TRUE, new Date());

        } else {
            System.out.println("fail!");
        }
        // 返回給綠界的回應，例如 "1|OK"
        return "1|OK";
    }


}