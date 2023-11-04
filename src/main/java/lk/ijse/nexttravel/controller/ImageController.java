//package lk.ijse.nexttravel.controller;
//
//import lk.ijse.nexttravel.service.ImageService;
//import lk.ijse.nexttravel.util.ResponseUtil;
//import lombok.RequiredArgsConstructor;
//import org.springframework.core.io.FileSystemResource;
//import org.springframework.core.io.Resource;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.http.codec.multipart.FilePart;
//import org.springframework.web.bind.annotation.*;
//import reactor.core.publisher.Mono;
//
//@RestController
//@RequiredArgsConstructor
//@RequestMapping("/api/image")
//public class ImageController {
//
//    private final ImageService imageService;
//
//    //handle file save req
//    @PostMapping(value = "/upload",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
//    public Mono<ResponseUtil> uploadImage(@RequestPart("file") FilePart filePart,@RequestPart String id) {
//        return imageService.SaveImageLocally(filePart,id).map(savedFile ->
//                new ResponseUtil(200,"Image saved Successfully",null));
//    }
//
////    //handle file get req
////    @GetMapping("{imageId}")
////    public Mono<ResponseUtil> getImageUrl(@PathVariable String imageId) {
////        return imageService.getImageUrlById(imageId).map(getFile->
////                new ResponseUtil(200,imageId+" fetch success",getFile));
////    }
//
//    @GetMapping(value = "{imageId}",produces = MediaType.IMAGE_PNG_VALUE)
//    public Mono<ResponseEntity<Resource>>getImage(@PathVariable String imageId) {
//        return imageService.serveImage(imageId);
//    }
//}
