package lk.ijse.nexttravel.controller;

import lk.ijse.nexttravel.dto.GuideDTO;
import lk.ijse.nexttravel.service.GuideService;
import lk.ijse.nexttravel.util.ResponseUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/guide")
@CrossOrigin(origins = {"http://127.0.0.1:5500"})
public class GuideController {

    private final GuideService guideService;

//    private final HeloRepo heloRepo;

    //handle guid Post request
    @PostMapping(value = "/save",consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(value = HttpStatus.CREATED)
    public Mono<ResponseUtil> saveGuide(@RequestBody GuideDTO guideDTO) {
        return guideService.saveGuide(guideDTO).map(savedGuide ->
                new ResponseUtil(200, "Guide saved Success...", null));
    }

//    //handle autoGenaratedGuidId
    @GetMapping(value = "/latestId")
    public Mono<ResponseUtil>generateGuideId() {
        System.out.println("i came");
       return guideService.generateGuideId().map(newId->{
           System.out.println("new Id :"+newId);
           return new ResponseUtil(200,"genarated Id",newId);
       });
    }

    //handle guid get request
    @GetMapping(path = "{guidName}",consumes = MediaType.APPLICATION_JSON_VALUE)
    public Mono<ResponseUtil> getGuide(@PathVariable String guidName) {
        return guideService.getGuide(guidName).map(guide ->
                new ResponseUtil(200, guidName + " Retrieved Success...", guide));
    }

    //handle get all guides request
    @GetMapping("/getAll")
    public Flux<ResponseUtil> getAllGuides() {
        return guideService.getAllGuides().map(allGuides ->
                new ResponseUtil(200, "All Guides Fetched...", allGuides));
    }

    //handle PUt request to update guide details
    @PutMapping(value = "/update",produces = MediaType.APPLICATION_JSON_VALUE)
    public Mono<ResponseUtil> updateGuidData(@RequestBody GuideDTO guideDTO) {
        return guideService.updateGuide(guideDTO).map(updatedGuid ->
                new ResponseUtil(200, "Guid updated Success",null));
    }

    //handle Delete request to delete guide details by id
    @DeleteMapping(path = "{guidId}",produces =MediaType.APPLICATION_JSON_VALUE)
    public Mono<ResponseUtil> deleteGuidData(@PathVariable String guidId) {
        return guideService.deleteGuide(guidId).map(removedGuid ->
                new ResponseUtil(200, guidId+" Guid Removed...", null));
    }


//    //save guid profile_img
//    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, value = "/upload")
//    public Mono<String> uploadData(
//            @RequestPart("name") String name,
//            @RequestPart("address") String address,
//            @RequestPart("image") Part image, // Use Part instead of MultipartFile
//            @RequestPart("id") String id
//    ) {
//        return DataBufferUtils.join(image.content())
//                .map(dataBuffer -> {
//                    byte[] content = new byte[dataBuffer.readableByteCount()];
//                    dataBuffer.read(content);
//                    DataBufferUtils.release(dataBuffer);
//                    return content;
//                })
//                .flatMap(contentBytes -> heloRepo.save(new HelloDto(id, name, address, contentBytes)))
//                .map(data -> "Details saved Successfully :" + id);
//
//    }
//
//    @GetMapping(value = "/image/{name}", produces = MediaType.IMAGE_PNG_VALUE)
//    public Mono<byte[]> getImage(@PathVariable String name) {
//        return heloRepo.findByName(name)
//                .map(HelloDto::getProfile);
//    }


}
