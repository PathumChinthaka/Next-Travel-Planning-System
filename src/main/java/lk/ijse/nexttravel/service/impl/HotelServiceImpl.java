package lk.ijse.nexttravel.service.impl;

import lk.ijse.nexttravel.dto.HotelDTO;
import lk.ijse.nexttravel.service.HotelService;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public class HotelServiceImpl implements HotelService {
    @Override
    public Mono<HotelDTO> saveHotelDetails(HotelDTO hotelDTO) {
        return null;
    }

    @Override
    public Mono<HotelDTO> getHotelDetails(String hotelName) {
        return null;
    }

    @Override
    public Flux<HotelDTO> getAllHotelDetails() {
        return null;
    }

    @Override
    public Mono<HotelDTO> updateHotelDetails(HotelDTO hotelDTO) {
        return null;
    }

    @Override
    public Mono<Void> deleteHotel(int hotelId) {
        return null;
    }
}
