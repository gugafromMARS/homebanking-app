package projects.gsc.usersservice.service;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.server.ResponseStatusException;
import projects.gsc.usersservice.converter.AuthenticationImp;
import projects.gsc.usersservice.converter.UserConverter;
import projects.gsc.usersservice.dto.UserCreateDto;
import projects.gsc.usersservice.dto.UserDto;
import projects.gsc.usersservice.dto.UserLogin;
import projects.gsc.usersservice.dto.UserPictureUpdate;
import projects.gsc.usersservice.model.User;
import projects.gsc.usersservice.repository.UserRepository;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.Base64;

@Service
@AllArgsConstructor
public class UserService {

    private final UserConverter userConverter;
    private final UserRepository userRepository;
    private final AuthenticationImp authenticationImp;

    public UserDto createUser(UserCreateDto userCreateDto) {
        User existingUser = userRepository.findByEmail(userCreateDto.getEmail());
        if(existingUser != null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User already exists");
        }
        existingUser = userConverter.fromCreateDto(userCreateDto);
        userRepository.save(existingUser);
        return userConverter.toDto(existingUser);
    }


    public UserDto getUserByEmail(String email) {
       User existingUser = userRepository.findByEmail(email);
       if(existingUser == null){
           throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
       }
       return userConverter.toDto(existingUser);
    }

    public UserDto loginUser(UserLogin userLogin) {
        User existingUser = userRepository.findByEmail(userLogin.getEmail());
        if(existingUser == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }
        return authenticationImp.login(existingUser, userLogin) ? userConverter.toDto(existingUser) : null;
    }

    public UserDto updatePic(UserPictureUpdate userPictureUpdate) {
        User existingUser = userRepository.findByEmail(userPictureUpdate.getOwnerEmail());
        if (existingUser == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }
        existingUser.setPhoto(userPictureUpdate.getPhoto());
        userRepository.save(existingUser);
        return userConverter.toDto(existingUser);
    }
}
