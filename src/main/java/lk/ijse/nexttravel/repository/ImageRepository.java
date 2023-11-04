package lk.ijse.nexttravel.repository;

import lk.ijse.nexttravel.model.Image;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.http.codec.multipart.FilePart;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

@Repository
public interface ImageRepository extends ReactiveMongoRepository<Image,String> {
    Mono<String>findByImageUrl(String url);

}
