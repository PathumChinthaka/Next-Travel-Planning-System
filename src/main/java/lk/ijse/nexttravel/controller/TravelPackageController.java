package lk.ijse.nexttravel.controller;

import lk.ijse.nexttravel.dto.PackageCategoryDTO;
import lk.ijse.nexttravel.dto.TravelPackageDTO;
import lk.ijse.nexttravel.service.TravelPackageService;
import lk.ijse.nexttravel.util.ResponseUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/package")
@CrossOrigin(origins = {"http://127.0.0.1:5500"})
public class TravelPackageController {

    private final TravelPackageService packageService;

    @PostMapping("/save")
    public Mono<ResponseUtil> savePackageDetails(@RequestBody TravelPackageDTO packageDTO) {
        return packageService.savePackage(packageDTO).map(savedPackage ->
                new ResponseUtil(200, "package saved", null));
    }

    @GetMapping("{packageName}")
    public Mono<ResponseUtil> getPackageDetails(@PathVariable String packageName) {
        return packageService.getPackage(packageName).map(searchPackage ->
                new ResponseUtil(200, "search package data", searchPackage));
    }

    @PostMapping("/category")
    Mono<ResponseUtil>savePackageCategory(@RequestBody PackageCategoryDTO packageCategoryDTO){
        System.out.println("req controller "+packageCategoryDTO);
        return packageService.savePackageCategory(packageCategoryDTO).map(packageCategory ->
                new ResponseUtil(200,"New Package Category Saved",null));
    }

    @GetMapping("/getAllcategory")
    public Flux<ResponseUtil> getAllPackageCategories(){
        return packageService.getAllPackageCategories().map(allPackageCategory ->
                new ResponseUtil(200,"package category received",allPackageCategory));
    }

    @GetMapping("/getAll")
    public Flux<ResponseUtil> getAllPackageDetails() {
        return packageService.getAllPackages().map(allPackages ->
                new ResponseUtil(200, "fetch all packages", allPackages));
    }

    @PutMapping("/update")
    public Mono<ResponseUtil> updatePackageDetails(@RequestBody TravelPackageDTO packageDTO) {
        return packageService.updatePackage(packageDTO).map(updatedPackage ->
                new ResponseUtil(200, "Package updated", null));
    }

    @DeleteMapping("{packageId}")
    public Mono<ResponseUtil> deletePackage(@PathVariable String packageId) {
        return packageService.deletePackage(packageId).map(deletedPackage ->
                new ResponseUtil(200, "package deleted", null));
    }
}
