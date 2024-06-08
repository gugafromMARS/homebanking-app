package projects.gsc.usersservice.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserDto {

    private Long id;
    private String name;
    private String email;
    private String address;
}
