package tw.com.younite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class EndPayController {


        @PostMapping("/redirectPost")
        @ResponseBody
        public String index(HttpServletResponse response) throws IOException {
            response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
            response.sendRedirect("http://localhost:3000/home");
            return null;
        }

//    @RequestMapping("/redirectPost")
//    @CrossOrigin(origins = "*")
//    public void redirect(HttpServletResponse response) throws Exception{
//        response.sendRedirect("http://localhost:3000/home");
//    }


}
