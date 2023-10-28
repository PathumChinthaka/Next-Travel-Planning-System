package lk.ijse.nexttravel.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(value = "Hotel_details")
public class Hotel {
    @Id
    private int hotelId;
    private String hotelName;
    private HotelCategory hotelCategory;
    private String email;
    private String telephone;
    private String mobile;
    private String fax;
    private String address;
    private String city;
    private String mapLocation;
    private String description;
    private String websiteLink;
    private String facebook;
    private String instagram;
    private String status;
}
