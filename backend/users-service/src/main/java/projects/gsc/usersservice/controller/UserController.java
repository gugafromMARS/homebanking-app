package projects.gsc.usersservice.controller;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projects.gsc.usersservice.dto.UserCreateDto;
import projects.gsc.usersservice.dto.UserLogin;
import projects.gsc.usersservice.dto.UserPictureUpdate;
import projects.gsc.usersservice.service.UserService;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "*")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserCreateDto userCreateDto){
        return new ResponseEntity<>(userService.createUser(userCreateDto), HttpStatus.CREATED);
    }


    @GetMapping
    public ResponseEntity<?> get(@RequestParam String  email){
        return ResponseEntity.ok(userService.getUserByEmail(email));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLogin userLogin){
        return ResponseEntity.ok(userService.loginUser(userLogin));
    }

    @PostMapping("/picture")
    public ResponseEntity<?> updatePicture(@RequestBody UserPictureUpdate userPictureUpdate){
        return  ResponseEntity.ok(userService.updatePic(userPictureUpdate));
    }

}
