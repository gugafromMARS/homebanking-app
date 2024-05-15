package projects.gsc.usersservice.converter;


import org.springframework.stereotype.Component;
import projects.gsc.usersservice.dto.UserCreateDto;
import projects.gsc.usersservice.dto.UserDto;
import projects.gsc.usersservice.model.User;

@Component
public class UserConverter {

    public User fromCreateDto(UserCreateDto userCreateDto){
        return new User().builder()
                .withName(userCreateDto.getName())
                .withAge(userCreateDto.getAge())
                .withAddress(userCreateDto.getAddress())
                .withEmail(userCreateDto.getEmail())
                .withPwd(userCreateDto.getPwd())
                .build();
    }

    public UserDto toDto(User user){
        return UserDto.builder()
                .name(user.getName())
                .email(user.getEmail())
                .build();
    }
}
