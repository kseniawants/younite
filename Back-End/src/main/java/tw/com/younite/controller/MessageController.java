package tw.com.younite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tw.com.younite.entity.MessageEntity;
import tw.com.younite.service.impl.MessageService;
import tw.com.younite.service.inter.IMessageService;
import tw.com.younite.util.JSONResult;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/message")
public class MessageController extends BaseController {
    @Autowired
    IMessageService iMessageService;

    @PostMapping("/add")
    public JSONResult<Void> addmessage(HttpSession session, @RequestBody MessageEntity messageEntity) {
        iMessageService.insertMessage(messageEntity);
        return new JSONResult<>(OK);
    }
}