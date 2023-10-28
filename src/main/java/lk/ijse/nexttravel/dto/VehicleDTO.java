package lk.ijse.nexttravel.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class VehicleDTO {
    private String vehicleId;
    private String vehicleCategory;
    private String vehicleName;
    private String fuelType;
    private String isHybrid;
    private String fuelUsage;
    private int seatCount;
    private String transmissionType;
    private double fuelUsageCost;
    private double perDayCharge;
    private double vehicle1kmCharge;
    private String remarks;
    private String policyType;
}
