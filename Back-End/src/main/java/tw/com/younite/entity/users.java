package tw.com.younite.entity;

import lombok.Data;

@Data
public class users {
    private String email;
    private String username;
    private boolean ThirdPartyLogin;
}
