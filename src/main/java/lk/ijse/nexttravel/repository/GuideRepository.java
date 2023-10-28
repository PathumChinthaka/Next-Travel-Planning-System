package lk.ijse.nexttravel.repository;

import lk.ijse.nexttravel.entity.Guide;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

@Repository
public interface GuideRepository extends ReactiveMongoRepository<Guide,String> {
    @Query(value = "{_id}", sort = "{_id: -1}", fields = "{_id: 1}")
    Mono<String>findLatestGuidId();
    Mono<Guide>findByGuidName(String guidName);
}
