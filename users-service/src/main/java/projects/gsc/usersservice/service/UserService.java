package projects.gsc.usersservice.service;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import projects.gsc.usersservice.converter.UserConverter;
import projects.gsc.usersservice.dto.UserCreateDto;
import projects.gsc.usersservice.dto.UserDto;
import projects.gsc.usersservice.model.User;
import projects.gsc.usersservice.repository.UserRepository;

@Service
@AllArgsConstructor
public class UserService {

    private final UserConverter userConverter;
    private final UserRepository userRepository;

    public UserDto createUser(UserCreateDto userCreateDto) {
        User existingUser = userRepository.findByEmail(userCreateDto.getEmail());
        if(existingUser != null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User already exists");
        }
        existingUser = userConverter.fromCreateDto(userCreateDto);
        userRepository.save(existingUser);
        return userConverter.toDto(existingUser);
    }


    public UserDto getUserBy(Long id) {
        return userRepository.findById(id).map(user -> userConverter.toDto(user))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
    }
}
