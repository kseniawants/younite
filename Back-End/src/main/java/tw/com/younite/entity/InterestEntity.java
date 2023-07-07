package tw.com.younite.entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class InterestEntity  implements Serializable {
    private Integer id;
    private Integer userID;
    private String interest;
}
