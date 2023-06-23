package tw.com.younite.util;

import tw.com.younite.service.uploadException.FileStateException;
import tw.com.younite.service.uploadException.FileUploadIOException;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

    @Component
    public class FileUploadUtil {

        public String uploadFile(MultipartFile file) {
            //TODO: check AWS S3 file uploading path
            String fileParentPath = "C:/Users/user/OneDrive/Desktop/avatar";
            File dir = new File(fileParentPath);
            if (!dir.exists()) {
                if (dir.mkdirs()) {
                    System.out.println("大頭貼資料夾創建成功!");
                } else {
                    System.out.println("大頭貼資料夾已經存在.");
                }
            }

            /** 檢查上傳檔案的名稱與檔案類型，隨機生成圖片前綴名稱。*/
            String originalFileName = file.getOriginalFilename();
            System.out.println("originalFileName = " + originalFileName);
            int index = originalFileName.lastIndexOf(".");
            String suffix = originalFileName.substring(index);
            String fileName = UUID.randomUUID().toString().toUpperCase() + suffix;
            //創建一個空檔案
            File destination = new File(dir, fileName);
            //大頭貼的文件內容寫入空文件中
            try {
                file.transferTo(destination);
            } catch (IOException e) {
                throw new FileUploadIOException("文件讀寫異常!");
            } catch (FileStateException e1) {
                throw new FileStateException("文件狀態異常");
            }
            System.out.println(fileName);
            return "/avatar/" + fileName;
        }

    }
