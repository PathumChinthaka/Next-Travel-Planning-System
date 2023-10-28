package lk.ijse.nexttravel.repository;

import lk.ijse.nexttravel.entity.Guide;
import lk.ijse.nexttravel.entity.Hotel;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

@Repository
public interface HotelRepository extends ReactiveMongoRepository<Hotel,Integer> {
    Mono<Guide>findByHotelName(String hotelName);
    boolean existsByHotelId(int hotelId);
    Mono<Guide>findByHotelId(int hotelId);
    Mono<Void>deleteByHotelId(int hotelId);
}
