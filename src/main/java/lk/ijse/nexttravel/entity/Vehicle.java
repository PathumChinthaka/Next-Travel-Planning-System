package lk.ijse.nexttravel.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(value = "Vehicle_details")
public class Vehicle {
    @Id
    private int vehicleId;
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
