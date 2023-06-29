package tw.com.younite.mapper;

import org.apache.ibatis.annotations.Mapper;
import tw.com.younite.entity.UserPhotos;

@Mapper
public interface UserPhotosMapper {
    Integer addPhotos(UserPhotos userPhotos);
}
