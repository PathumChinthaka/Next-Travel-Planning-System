package lk.ijse.nexttravel.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class TravelAreaDTO {
    private int travelAreaId;
    private String travelAreaName;
}
