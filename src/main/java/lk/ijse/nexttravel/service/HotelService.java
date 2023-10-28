package lk.ijse.nexttravel.service;

import lk.ijse.nexttravel.dto.HotelDTO;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface HotelService {
    Mono<HotelDTO>saveHotelDetails(HotelDTO hotelDTO);
    Mono<HotelDTO>getHotelDetails(String hotelName);
    Flux<HotelDTO>getAllHotelDetails();
    Mono<HotelDTO> updateHotelDetails(HotelDTO hotelDTO);
    Mono<Void>deleteHotel(int hotelId);
}
