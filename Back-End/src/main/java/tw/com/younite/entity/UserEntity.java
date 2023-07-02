package tw.com.younite.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class UserEntity extends BaseEntity implements Serializable {
    private Integer id;
    private String username;
    private String salt;
    private String email;
    private String password;
    private Boolean thirdPartyLogin;
    private String googleUser;
    private String facebookUser;
    private Date vipExpiry;
}
