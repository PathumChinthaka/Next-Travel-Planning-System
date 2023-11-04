package lk.ijse.nexttravel.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class TravelPackageDTO {
    private String packageId;
    @Pattern(regexp = "/^[a-zA-Z\\s]+$/")
    @NotEmpty(message = "Package Name is Required !")
    private String packageName;
    @Pattern(regexp = "/^[a-zA-Z0-9\\s.,#!&*()-]+$/")
    @NotEmpty(message = "Package Description is Required !")
    private String packageDescription;
    @Pattern(regexp = "/^[a-zA-Z]+$/")
    @NotEmpty(message = "Package Category is Required !")
    private String packageCategory;
    @Pattern(regexp = "")
    @NotEmpty(message = "Day Count is Required !")
    private int dayCount;
    @Pattern(regexp = "/^[a-zA-Z0-9\\s.,#!&*()-]+$/")
    @NotEmpty(message = "Package Travel Area is Required !")
    private String travelAreas;
    @Pattern(regexp = "")
    @NotEmpty(message = "Night Count is Required !")
    private int nightCount;
    private String allowPets;
    private String roomTypes;
    @Pattern(regexp = " /^[a-zA-Z\\s]+$/")
    @NotEmpty(message = "Package Video Url is Required !")
    private String travelPackageVideoUrl;
}
