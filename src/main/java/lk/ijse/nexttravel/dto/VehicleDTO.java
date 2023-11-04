package lk.ijse.nexttravel.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class VehicleDTO {
    private int vehicleId;
    @Pattern(regexp = "/^[a-zA-Z\\s]+$/")
    @NotEmpty(message = "Vehicle Category is Required !")
    private String vehicleCategory;
    @Pattern(regexp = "/^[a-zA-Z\\s]+$/")
    @NotEmpty(message = "Vehicle Name is Required !")
    private String vehicleName;
    @Pattern(regexp = "/^[a-zA-Z\\s]+$/")
    @NotEmpty(message = "Package Name is Required !")
    private String fuelType;
    @Pattern(regexp = "/^[a-zA-Z\\s]+$/")
    @NotEmpty(message = "Fuel type is Required !")
    private String isHybrid;
    @Pattern(regexp = "/^(\\d+(\\.\\d+)?)([ ]?L)?$/")
    @NotEmpty(message = "Fuel Usage is Required !")
    private String fuelUsage;
    @Pattern(regexp = "/^\\d{1,2}$/")
    @NotEmpty(message = "Package Name is Required !")
    private int seatCount;
    @Pattern(regexp = "/^[a-zA-Z\\s]+$/")
    @NotEmpty(message = "Vehicle Transmission type Required !")
    private String transmissionType;
    @Pattern(regexp = "/^\\d{2,3}$/")
    @NotEmpty(message = "Fuel usage cost is Required !")
    private double fuelUsageCost;
    @Pattern(regexp = "/^\\d{3,4}$/")
    @NotEmpty(message = "Package Name is Required !")
    private double perDayCharge;
    @Pattern(regexp = "/^\\d{2,3}$/")
    @NotEmpty(message = "Package Name is Required !")
    private double vehicle1kmCharge;
    @Pattern(regexp = "/^[a-zA-Z\\s]+$/")
    @NotEmpty(message = "Package Name is Required !")
    private String remarks;
    private String policyType;
}
