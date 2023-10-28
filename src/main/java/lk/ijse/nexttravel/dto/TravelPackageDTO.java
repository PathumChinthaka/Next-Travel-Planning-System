package lk.ijse.nexttravel.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class TravelPackageDTO {
    private String packageId;
    private String packageName;
    private String packageDescription;
    private String packageCategory;
    private int dayCount;
    private String travelAreas;
    private int nightCount;
    private String allowPets;
    private String roomTypes;
    private String travelPackageVideoUrl;
}
