package tw.com.younite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

import tw.com.younite.entity.AmazonFileVO;
import tw.com.younite.service.impl.AmazonService;
import tw.com.younite.service.impl.AmazonUploadServiceImpl;
import tw.com.younite.service.impl.Amazons3Service;
import tw.com.younite.service.inter.AmazonUploadService;
import tw.com.younite.util.JSONResult;


@RestController
@RequestMapping("/storage")
public class AmazonS3Controller extends BaseController{

    @Autowired
    private AmazonService amazonService;

    @Autowired
    private AmazonUploadService amazonUploadService;

    @Autowired
    private Amazons3Service service;

    @PostMapping(value = "/upload")
    public JSONResult<Void> upload(@RequestParam("file") MultipartFile file) {
        AmazonFileVO amazonFileModel = null;
        try {
            amazonFileModel = amazonUploadService.upload(file, "avatar");
            System.out.println("amazonFileModel = " + amazonFileModel.getFilePath());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new JSONResult(OK);
    }

//    @PostMapping(value = "/upload")
//    public JSONResult<String> uploadMessage(@RequestParam("file") MultipartFile file) {
//        AmazonFileVO amazonFileModel = null;
//        try {
//            amazonFileModel = amazonUploadService.upload(file, "avatar");
//            System.out.println("amazonFileModel = " + amazonFileModel.getFilePath());
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        return new JSONResult(OK, );
//    }
    //這會動喔
    @PostMapping("/uploadOK")
    public JSONResult<Void> uploadOK(@RequestParam("file") MultipartFile file) {
        service.uploadFile(file);
        return new JSONResult<>(OK);
    }

    //這會動喔
    @GetMapping("/download/{fileName}")
    public JSONResult<ByteArrayResource> download(@PathVariable String fileName) {
        byte[] data = service.downloadFile(fileName);
        ByteArrayResource resource = new ByteArrayResource(data);
        return new JSONResult<>(OK, resource);
    }

    @PostMapping("/uploadFile")
    public String uploadFile(@RequestParam(value = "file") MultipartFile file) {
        System.out.println("file = " + file);
        return this.amazonService.uploadFile(file);
    }

    @DeleteMapping("/deleteFile")
    public String deleteFile(@RequestPart(value = "url") String fileUrl) {
        return this.amazonService.deleteFileFromS3Bucket(fileUrl);
    }

    @GetMapping("/getFileList")
    public JSONResult<List<String>> getFileList() {
        System.out.println("this.amazonService.listFiles() = " + this.amazonService.listFiles());
        return new JSONResult(OK, this.amazonService.listFiles());
    }
}
