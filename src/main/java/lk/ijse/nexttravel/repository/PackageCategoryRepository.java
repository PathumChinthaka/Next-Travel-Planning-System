package lk.ijse.nexttravel.repository;

import lk.ijse.nexttravel.entity.Guide;
import lk.ijse.nexttravel.entity.Hotel;
import lk.ijse.nexttravel.entity.TravelPackageCategory;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

@Repository
public interface PackageCategoryRepository extends ReactiveMongoRepository<TravelPackageCategory,Integer> {
}
