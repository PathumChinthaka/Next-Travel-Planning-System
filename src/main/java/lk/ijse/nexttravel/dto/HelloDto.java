package lk.ijse.nexttravel.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.http.codec.multipart.FilePart;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class HelloDto {
    @Id
    private String id;
    private String name;
}
