package lk.ijse.nexttravel.dto;


import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lk.ijse.nexttravel.entity.HotelCategory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class HotelDTO {
    private int hotelId;
    @Pattern(regexp = "/^[a-zA-Z\\s]+$/")
    @NotEmpty(message = "Hotel Name is Required !")
    private String hotelName;
    @NotEmpty(message = "Hotel Category is Required !")
    private HotelCategory hotelCategory;
    @Pattern(regexp = "/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$/")
    @NotEmpty(message = "Hotel Email is Required !")
    private String email;
    @Pattern(regexp = "/^(011|012|034|038)\\d{7}$/")
    @NotEmpty(message = "Hotel TeleNo is Required !")
    private String telephone;
    @Pattern(regexp = "/^(071|072|074|076|078|070|075|077)\\d{7}$/")
    @NotEmpty(message = "Hotel MobileNo is Required !")
    private String mobile;
    @Pattern(regexp = "/^\\d{10}$/")
    @NotEmpty(message = "Hotel FaxNo is Required !")
    private String fax;
    @Pattern(regexp = "/^[0-9A-Z a-z,/:]{4,50}$/")
    @NotEmpty(message = "Hotel Address is Required !")
    private String address;
    @Pattern(regexp = "/^[a-zA-Z\\s]+$/")
    @NotEmpty(message = "City Name is Required !")
    private String city;
    @Pattern(regexp = "/^(http|https):\\/\\/[A-Za-z0-9\\-.]+(\\.[A-Za-z]{2,4}){1,2}\\/?([A-Za-z0-9\\-.\\/]*)$/")
    @NotEmpty(message = "Hotel Map Location is Required !")
    private String mapLocation;
    @Pattern(regexp = "/^[a-zA-Z0-9\\s.,#!&*()-]+$/")
    @NotEmpty(message = "Hotel Description is Required !")
    private String description;
    @Pattern(regexp = "/^(http|https):\\/\\/[A-Za-z0-9\\-.]+(\\.[A-Za-z]{2,4}){1,2}\\/?([A-Za-z0-9\\-.\\/]*)$/")
    @NotEmpty(message = "Hotel websiteLink is Required !")
    private String websiteLink;
    @Pattern(regexp = "/^https:\\/\\/www\\.facebook\\.com\\/[a-zA-Z0-9.]+$/")
    @NotEmpty(message = "Hotel facebook Acc is Required !")
    private String facebook;
    @Pattern(regexp = "/^https:\\/\\/www\\.instagram\\.com\\/[a-zA-Z0-9._]+$/")
    @NotEmpty(message = "Hotel instagram Acc is Required !")
    private String instagram;
    @Pattern(regexp = "/^[a-zA-Z\\s]+$/")
    @NotEmpty(message = "Hotel Status is Required !")
    private String status;
}
