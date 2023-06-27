package tw.com.younite.entity;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class UserEntity extends BaseEntity implements Serializable {
    private Integer id;
    private String username;
    private String salt;
    private String email;
    private String phone;
    private String password;
    private Boolean thirdPartyLogin;
    private String googleUser;
    private String facebookUser;
    private Date vipExpiry;
}
