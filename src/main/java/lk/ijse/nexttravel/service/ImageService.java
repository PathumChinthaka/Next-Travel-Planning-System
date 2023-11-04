package lk.ijse.nexttravel.service;

import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.http.codec.multipart.FilePart;
import reactor.core.publisher.Mono;

public interface ImageService {
    Mono<String> SaveImageLocally(FilePart filePart,String id);
    Mono<String> getImageUrlById(String imageId);
//    ResponseEntity<FileSystemResource> downloadImage(String imageId);
    Mono<ResponseEntity<Resource>> serveImage(String imageId);

}
