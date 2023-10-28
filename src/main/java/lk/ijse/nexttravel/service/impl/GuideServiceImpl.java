package lk.ijse.nexttravel.service.impl;

import lk.ijse.nexttravel.dto.GuideDTO;
import lk.ijse.nexttravel.entity.Guide;
import lk.ijse.nexttravel.repository.GuideRepository;
import lk.ijse.nexttravel.service.GuideService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class GuideServiceImpl implements GuideService {

    private final ModelMapper modelMapper;

    private final GuideRepository guideRepository;

    //save guid details in db
    @Override
    public Mono<GuideDTO> saveGuide(GuideDTO guideDTO) {
        Guide saveGuid = modelMapper.map(guideDTO, Guide.class);
        saveGuid.setGuidId(UUID.randomUUID().toString());
        return guideRepository.save(saveGuid)
                .map(savedGuid -> modelMapper.map(savedGuid, GuideDTO.class));
    }

    //Auto genarated guidId
    @Override
    public Mono<String> generateGuideId() {
        Mono<String> latestId = guideRepository.findLatestGuidId();
        System.out.println("service :"+latestId);
        return latestId;
    }

    //get guid details by guid id
    @Override
    public Mono<GuideDTO> getGuide(String guidName) {
        Mono<Guide> guidMono = guideRepository.findByGuidName(guidName);
        return guidMono.map(guide -> modelMapper.map(guide, GuideDTO.class));
    }

    //get All guid details from db
    @Override
    public Flux<GuideDTO> getAllGuides() {
        Flux<Guide> allGuids = guideRepository.findAll();
        return allGuids.map(guides -> modelMapper.map(guides, GuideDTO.class))
                .switchIfEmpty(Flux.empty());
    }

    //update guid details by guid id
    @Override
    public Mono<GuideDTO> updateGuide(GuideDTO guideDTO) {
        Mono<Guide> updateGuid = guideRepository.findById(guideDTO.getGuidId().trim());
        return updateGuid.flatMap((existguide) -> {
            existguide.setGuidName(guideDTO.getGuidName());
            existguide.setAddress(guideDTO.getAddress());
            existguide.setAge(guideDTO.getAge());
            existguide.setContact(guideDTO.getContact());
            existguide.setExperience(guideDTO.getExperience());
            existguide.setDayValue(guideDTO.getDayValue());
            existguide.setRemarks(guideDTO.getRemarks());
            existguide.setPolicyId(guideDTO.getPolicyId());
            return guideRepository.save(existguide);
        }).map((guid -> modelMapper.map(guid, GuideDTO.class)));
    }

    //Delete guid details by guid id
    @Override
    public Mono<Void> deleteGuide(String guidId) {
        Mono<Void> voidMono = guideRepository.deleteById(guidId);
//        System.out.println("service delete "+voidMono);
        return voidMono;
    }
}
