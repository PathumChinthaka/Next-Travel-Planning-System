package lk.ijse.nexttravel.service.impl;

import lk.ijse.nexttravel.model.Image;
import lk.ijse.nexttravel.repository.ImageRepository;
import lk.ijse.nexttravel.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.codec.multipart.FilePart;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.io.File;
import java.nio.file.Paths;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {

    private final ImageRepository imageRepository;

    //save file to the local storage
    @Override
    public Mono<String> SaveImageLocally(FilePart filePart,String id) {
        String directory = "D:\\Spring-Boot-Projects\\NextTravel Images";
        String filename = filePart.filename();
        String filePath = Paths.get(directory, filename).toString();

        return filePart.transferTo(new File(filePath))
                .then(Mono.just("D:\\Spring-Boot-Projects\\NextTravel Images" + filename))
                .flatMap(url -> {
                    Image image = new Image();
                    image.setImageUrl(url);
                    image.setId(id);
                    //save file url in the db
                    return imageRepository.save(image).map(Image::getImageUrl);
                });
    }

    @Override
    public Mono<String> getImageUrlById(String imageId) {
        return imageRepository.findById(imageId)
                .map(Image::getImageUrl)
                .switchIfEmpty(Mono.error(new RuntimeException("Image not found")));
    }

    public Mono<ResponseEntity<Resource>> serveImage(String imageId) {

        Mono<String> imageUrlById = getImageUrlById(imageId);
        // Build the file path based on the imageId
        String directory = "D:\\Spring-Boot-Projects\\NextTravel Images";
        String filePath = String.valueOf(Paths.get(directory, String.valueOf(imageUrlById)));

        // Create a Resource object to represent the file
        Resource file = new FileSystemResource(filePath);

        if (file.exists() && file.isReadable()) {
            // Define the Content-Disposition header to control the file name when downloading
            HttpHeaders headers = new HttpHeaders();
            headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + imageId);

            return Mono.just(ResponseEntity.ok()
                    .headers(headers)
                    .contentType(MediaType.IMAGE_PNG)
                    .body(file));
        } else {
            // Handle the case when the file is not found or not readable
            return Mono.just(ResponseEntity.notFound().build());
        }
    }

}
