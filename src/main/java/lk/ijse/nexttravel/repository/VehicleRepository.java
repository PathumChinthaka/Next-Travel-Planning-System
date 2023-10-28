package lk.ijse.nexttravel.repository;

import lk.ijse.nexttravel.entity.Guide;
import lk.ijse.nexttravel.entity.Vehicle;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

@Repository
public interface VehicleRepository extends ReactiveMongoRepository<Vehicle,String> {
    Mono<Vehicle>findByVehicleName(String vehicleName);
    Mono<Vehicle>findByVehicleId(String vehicleId);
    Mono<Void>deleteByVehicleId(String vehicleId);
}
