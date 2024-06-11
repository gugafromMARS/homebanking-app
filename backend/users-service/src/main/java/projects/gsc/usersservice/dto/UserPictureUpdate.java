package projects.gsc.usersservice.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserPictureUpdate {


    private byte[] photo;
    private String ownerEmail;
}
