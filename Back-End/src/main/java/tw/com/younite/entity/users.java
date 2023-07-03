package tw.com.younite.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(description = "Google登入的Entity")
public class users {
    @ApiModelProperty(value = "GOOLE登入傳入Email")
    private String email;
    private String username;
    private boolean ThirdPartyLogin;
}
