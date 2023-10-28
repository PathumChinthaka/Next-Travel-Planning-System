package lk.ijse.nexttravel.controller;

import lk.ijse.nexttravel.dto.VehicleDTO;
import lk.ijse.nexttravel.service.VehicleService;
import lk.ijse.nexttravel.util.ResponseUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/vehicle")
@CrossOrigin(origins = {"http://127.0.0.1:5500"})
public class VehicleController {

    private final VehicleService vehicleService;

    //handle vehicle post request
    @PostMapping("/save")
    public Mono<ResponseUtil> saveVehicleData(@RequestBody VehicleDTO vehicleDTO) {
        return vehicleService.saveVehicle(vehicleDTO).map(savedVehicle ->
                new ResponseUtil(200, "Vehicle Saved", null));
    }

    //handle vehicle by Id Get request
    @GetMapping("{vehicleName}")
    public Mono<ResponseUtil> getVehicleData(@PathVariable String vehicleName) {
        return vehicleService.getVehicle(vehicleName).map(vehicle ->
                new ResponseUtil(200, vehicleName + "Vehicle Retrieved", vehicle));
    }

    //handle getAll vehicle request
    @GetMapping("/getAll")
    public Flux<ResponseUtil> getAllVehiclesData() {
        return vehicleService.getAllVehicles().map(vehicles ->
                new ResponseUtil(200, "Get All vehicles", vehicles));
    }

    //handle vehicle update request
    @PutMapping("/update")
    public Mono<ResponseUtil> updateVehicleData(@RequestBody VehicleDTO vehicleDTO) {
        return vehicleService.updateVehicle(vehicleDTO).map(updatedvehicle ->
                new ResponseUtil(200, " Vehicle data Updated", null));
    }

    //handle vehicle delete by id request
    @DeleteMapping("{vehicleId}")
    public Mono<ResponseUtil> deleteVehicleData(@PathVariable String vehicleId) {
        return vehicleService.deleteVehicle(vehicleId).map(deletedVehicle ->
                new ResponseUtil(200, vehicleId + " Deleted Success", null));
    }
}
