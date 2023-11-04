package lk.ijse.nexttravel.entity;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(value = "Guid_details")
public class Guide{
    @Id
    private String guidId;
    private String guidName;
    private String address;
    private String gender;
    private int age;
    private String contact;
    private String experience;
    private double dayValue;
    private String remarks;
//    private byte[] guideProfile;
    private int policyId;
}
