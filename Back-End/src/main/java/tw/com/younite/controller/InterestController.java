package tw.com.younite.controller;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import tw.com.younite.service.impl.InterestService;
import tw.com.younite.service.inter.IInterestService;
import tw.com.younite.util.JSONResult;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class InterestController extends BaseController {
    @Autowired
    IInterestService interestService;
    @ApiOperation("查詢指定用戶興趣")
    @GetMapping("/users/interest/{userID}")
    public JSONResult<List<String>> getUserInterest(@ApiParam(value = "查詢指定個興趣，並回傳", required = true)
                                                    @PathVariable Integer userID) {
        List<String> data = interestService.getInterests(userID);
        return new JSONResult<>(OK, data);
    }

    @ApiOperation("查詢現在用戶興趣")
    @GetMapping("/users/interest")
    public JSONResult<List<String>> getCurrentUserInterest(@ApiParam(value = "查詢現在用戶興趣，並回傳", required = true)
                                                           HttpSession session) {
        Integer userID = getIDFromSession(session);
        List<String> data = interestService.getInterests(userID);
        return new JSONResult<>(OK, data);
    }
}
