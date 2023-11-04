package lk.ijse.nexttravel.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class GuideDTO {
    private String guidId;
    @Pattern(regexp = "/^[A-Z|a-z\\s]{3,20}$/",message = "Check Guide Name Again")
    @NotEmpty(message = "Guide Name is Required !")
    private String guidName;
    @Pattern(regexp = "/^[0-9A-Z a-z,/:]{4,50}$/",message = "Check Guide Address Again")
    @NotEmpty(message = "Guide Address is Required !")
    private String address;
    @NotEmpty(message = "Guide Gender is Required !")
    private String gender;
    @Pattern(regexp = "^(1[8-9]|[2-5][0-9]|65)$",message = "Check Guide Age Again")
    @NotEmpty(message = "Guide Age is Required !")
    private int age;
    @Pattern(regexp = "/^(071|072|074|076|078|070|075|077)\\d{7}$/",message = "Check Guide Contact Again")
    @NotEmpty(message = "Guide Contact is Required !")
    private String contact;
    @Pattern(regexp = "/^[0-9A-Z a-z,/:]{4,50}$/",message = "Check Guide Experience Again")
    @NotEmpty(message = "Guide Experience is Required !")
    private String experience;
    @Pattern(regexp = "^(?:1000|100[0-9]|[1-9][0-9][0-9]|[1-9][0-9])$",message = "Check Day value Again")
    @NotEmpty(message = "Guide Day Value is Required !")
    private double dayValue;
//    private byte[] guideProfile;
    @Pattern(regexp = "/^[a-zA-Z\\s]+$/")
    @NotEmpty(message = "Guide Remark is Required !")
    private String remarks;
    private int policyId;
}
