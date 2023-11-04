package lk.ijse.nexttravel.service;

import lk.ijse.nexttravel.dto.GuideDTO;
import lk.ijse.nexttravel.dto.VehicleDTO;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface VehicleService {
    Mono<VehicleDTO> saveVehicle(VehicleDTO vehicleDTO);
    Mono<VehicleDTO>getVehicle(int vehicleId);
    Flux<VehicleDTO> getAllVehicles();
    Mono<VehicleDTO>updateVehicle(VehicleDTO vehicleDTO);
    Mono<Void>deleteVehicle(int vehicleId);
}
