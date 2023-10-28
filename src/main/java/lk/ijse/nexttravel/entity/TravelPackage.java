package lk.ijse.nexttravel.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document("Travel_package")
public class TravelPackage {
    @Id
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
