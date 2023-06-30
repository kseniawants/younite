package tw.com.younite.entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class UserPhotosEntity implements Serializable {
    private int photoID;
    private int profileID;
    private String firstPhotoPath;
    private String secondPhotoPath;
    private String thirdPhotoPath;
    private String fourthPhotoPath;
    private String fifthPhotoPath;
    private String sixthPhotoPath;
}
