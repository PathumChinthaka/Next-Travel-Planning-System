package lk.ijse.nexttravel.service.impl;

import lk.ijse.nexttravel.dto.HotelDTO;
import lk.ijse.nexttravel.entity.Guide;
import lk.ijse.nexttravel.entity.Hotel;
import lk.ijse.nexttravel.repository.HotelRepository;
import lk.ijse.nexttravel.service.HotelService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
@Transactional
public class HotelServiceImpl implements HotelService {

    private final HotelRepository hotelRepository;

    private final ModelMapper modelMapper;

    //save hotel details in database
    @Override
    public Mono<HotelDTO> saveHotelDetails(HotelDTO hotelDTO) {
        Hotel hotelEntity = modelMapper.map(hotelDTO, Hotel.class);
        return hotelRepository.save(hotelEntity).map(hotel ->
                modelMapper.map(hotel,HotelDTO.class));
    }

    //get required hotel details from database
    @Override
    public Mono<HotelDTO> getHotelDetails(String hotelName) {
        Mono<Guide> findHotel = hotelRepository.findByHotelName(hotelName);
        return findHotel.map(hotelDetails -> modelMapper.map(hotelDetails,HotelDTO.class));
    }

    //get All hotel details from database
    @Override
    public Flux<HotelDTO> getAllHotelDetails() {
        Flux<Hotel> allHotelDetails = hotelRepository.findAll();
        return allHotelDetails.map(allhotels ->modelMapper.map(allhotels,HotelDTO.class))
                .switchIfEmpty(Flux.empty());
    }

    //update hotel details in database
    @Override
    public void updateHotelDetails(HotelDTO hotelDTO) {
        if (hotelRepository.existsByHotelId(hotelDTO.getHotelId())) {
            hotelRepository.save(modelMapper.map(hotelDTO,Hotel.class));
        }else {
            throw  new RuntimeException(hotelDTO.getHotelId()+"Hotel Id not Exist");
        }
    }

    //delete hotel details from database
    @Override
    public Mono<Void> deleteHotel(int hotelId) {
        return hotelRepository.deleteById(hotelId);
    }
}
