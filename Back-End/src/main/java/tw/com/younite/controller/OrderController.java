package tw.com.younite.controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import tw.com.younite.service.impl.OrderService;


@RestController
public class OrderController {
    @Autowired
    OrderService orderService;

    @PostMapping("/ecpayCheckout")
    public String ecpayCheckout() {
        String aioCheckOutALLForm = orderService.ecpayCheckout();

        return aioCheckOutALLForm;
    }
}
