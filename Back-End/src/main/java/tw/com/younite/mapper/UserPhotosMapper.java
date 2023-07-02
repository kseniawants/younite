package tw.com.younite.mapper;

import tw.com.younite.entity.UserPhotosEntity;
import org.apache.ibatis.annotations.Mapper;
import tw.com.younite.entity.UserPhotos;

public interface UserPhotosMapper {
    Integer addPhotos(UserPhotosEntity userPhotos);
}
