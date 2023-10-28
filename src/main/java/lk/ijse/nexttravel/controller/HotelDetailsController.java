package lk.ijse.nexttravel.controller;

import lk.ijse.nexttravel.dto.HotelDTO;
import lk.ijse.nexttravel.service.HotelService;
import lk.ijse.nexttravel.util.ResponseUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/hotel")
@CrossOrigin(origins = {"http://127.0.0.1:5500"})
public class HotelDetailsController {

    private final HotelService hotelService;

    //handle hotel details post request
    @PostMapping("/save")
    @ResponseStatus(value = HttpStatus.CREATED)
    public Mono<ResponseUtil> saveHotelDetails(@RequestBody HotelDTO hotelDTO) {
        return hotelService.saveHotelDetails(hotelDTO).map(hotelDTO1 ->
                new ResponseUtil(200, "Hotel details Saved", null));
    }

    //handle hotel details get request
    @GetMapping("{hotelName}")
    public Mono<ResponseUtil> getHotelDetails(@PathVariable String hotelName) {
        return hotelService.getHotelDetails(hotelName).map(hotelDTO ->
                new ResponseUtil(200, "Hotel details returned", hotelDTO));
    }

    //handle get All hotel details get request
    @GetMapping("/getAll")
    public Flux<ResponseUtil> getAllHotelDetails() {
        return hotelService.getAllHotelDetails().map(allHotelDetails ->
                new ResponseUtil(200, "return All Hotel Details", allHotelDetails));
    }

    //handle hotel details update request
    @PutMapping("/update")
    public Mono<ResponseUtil> updateHotelDetails(@RequestBody HotelDTO hotelDTO) {
        return hotelService.updateHotelDetails(hotelDTO).map(updatedHotelDetails ->
                new ResponseUtil(200, "Hotel Details Updated", null));
    }

    //handle hotel details delete request
    @DeleteMapping("{hotelId}")
    public Mono<ResponseUtil> deleteHotel(@PathVariable int hotelId) {
        return hotelService.deleteHotel(hotelId).map(deletedHotel ->
                new ResponseUtil(200, "Hotel details Deleted", null));
    }
}
