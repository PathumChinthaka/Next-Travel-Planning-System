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
public class VehicleController{

    private final VehicleService vehicleService;

    @PostMapping("/save")
    public Mono<ResponseUtil> saveVehicleData(@RequestBody VehicleDTO vehicleDTO) {
        vehicleService.saveVehicle(vehicleDTO).map(savedVehicle ->
                new ResponseUtil(200,"Vehicle Saved",null));
    }

    @GetMapping("{vehicleId}")
    public Mono<ResponseUtil> getVehicleData(@PathVariable int vehicleId) {
        return null;
    }

    @GetMapping("/getAll")
    public Flux<ResponseUtil> getAllVehiclesData() {
        return null;
    }

    @PutMapping("{vehicleId}")
    public Mono<ResponseUtil> updateVehicleData(@RequestBody VehicleDTO vehicleDTO,@PathVariable int vehicleId) {
        return null;
    }

    @DeleteMapping("{vehicleId}")
    public Mono<ResponseUtil> deleteVehicleData(@PathVariable int vehicleId) {
        return null;
    }
}
