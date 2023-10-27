package lk.ijse.nexttravel.dto;

import lk.ijse.nexttravel.entity.HotelCategory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PackageCategoryDTO {
    private int packageCategoryId;
    private String packageCategoryName;
    private List<HotelCategory>hotelCategories;
}
