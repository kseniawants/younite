package tw.com.younite.entity;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;


@Data
public class BaseEntity implements Serializable {
    private Date createdAt;
    private Date modifiedAt;
}
