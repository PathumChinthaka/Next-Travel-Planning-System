package lk.ijse.nexttravel.service.impl;

import lk.ijse.nexttravel.dto.VehicleDTO;
import lk.ijse.nexttravel.entity.Vehicle;
import lk.ijse.nexttravel.repository.VehicleRepository;
import lk.ijse.nexttravel.service.VehicleService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class VehicleServiceImpl implements VehicleService {

    private final VehicleRepository vehicleRepository;

    private final ModelMapper modelMapper;

    //save Vehicle details from db
    @Override
    public Mono<VehicleDTO> saveVehicle(VehicleDTO vehicleDTO) {
        Vehicle vehicleSave = modelMapper.map(vehicleDTO, Vehicle.class);
//        vehicleSave.setVehicleId(UUID.randomUUID().toString());
        return vehicleRepository.save(vehicleSave).map(savedVehicle ->
                modelMapper.map(savedVehicle, VehicleDTO.class));
    }

    //get Vehicle details from db
    @Override
    public Mono<VehicleDTO> getVehicle(int vehicleId) {
        Mono<Vehicle> byVehicleName = vehicleRepository.findById(vehicleId);
        return byVehicleName.map(vehicle ->
                modelMapper.map(vehicle, VehicleDTO.class));
    }

    //get all Vehicle details from db
    @Override
    public Flux<VehicleDTO> getAllVehicles() {
        Flux<Vehicle> allVehicles = vehicleRepository.findAll();
        return allVehicles.map(vehicles -> modelMapper.map(vehicles, VehicleDTO.class))
                .switchIfEmpty(Flux.empty());
    }

    //update Vehicle details in db
    @Override
    public Mono<VehicleDTO> updateVehicle(VehicleDTO vehicleDTO) {
        Mono<Vehicle> updateByVehicleId = vehicleRepository.findByVehicleId(vehicleDTO.getVehicleId());
        return updateByVehicleId.flatMap(existvehicle -> {
            existvehicle.setVehicleCategory(vehicleDTO.getVehicleCategory());
            existvehicle.setVehicleName(vehicleDTO.getVehicleName());
            existvehicle.setFuelType(vehicleDTO.getFuelType());
            existvehicle.setIsHybrid(vehicleDTO.getIsHybrid());
            existvehicle.setFuelUsage(vehicleDTO.getFuelUsage());
            existvehicle.setSeatCount(vehicleDTO.getSeatCount());
            existvehicle.setTransmissionType(vehicleDTO.getTransmissionType());
            existvehicle.setVehicle1kmCharge(vehicleDTO.getVehicle1kmCharge());
            existvehicle.setRemarks(vehicleDTO.getRemarks());
            existvehicle.setPolicyType(vehicleDTO.getPolicyType());
            return vehicleRepository.save(existvehicle);
        }).map(vehicle -> modelMapper.map(vehicle, VehicleDTO.class));
    }

    //delete Vehicle details in db
    @Override
    public Mono<Void> deleteVehicle(int vehicleId) {
        return vehicleRepository.deleteById(vehicleId);
    }
}
