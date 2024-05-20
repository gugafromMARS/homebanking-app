package projects.gsc.usersservice.converter;


import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import projects.gsc.usersservice.dto.UserCreateDto;
import projects.gsc.usersservice.dto.UserDto;
import projects.gsc.usersservice.model.User;

@Component
@AllArgsConstructor
public class UserConverter {

    private final PasswordEncoder passwordEncoder;
    public User fromCreateDto(UserCreateDto userCreateDto){
        return new User().builder()
                .withName(userCreateDto.getName())
                .withAge(userCreateDto.getAge())
                .withAddress(userCreateDto.getAddress())
                .withEmail(userCreateDto.getEmail())
                .withPwd(passwordEncoder.encode(userCreateDto.getPwd()))
                .build();
    }

    public UserDto toDto(User user){
        return UserDto.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .build();
    }
}
