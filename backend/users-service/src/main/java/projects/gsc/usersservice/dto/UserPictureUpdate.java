package projects.gsc.usersservice.dto;


import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class UserPictureUpdate {


    private String photo;
    private String ownerEmail;
}
