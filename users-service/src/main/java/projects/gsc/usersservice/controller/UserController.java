package projects.gsc.usersservice.controller;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projects.gsc.usersservice.dto.UserCreateDto;
import projects.gsc.usersservice.dto.UserLogin;
import projects.gsc.usersservice.service.UserService;

@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserCreateDto userCreateDto){
        return new ResponseEntity<>(userService.createUser(userCreateDto), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> get(@RequestParam Long id){
        return ResponseEntity.ok(userService.getUserBy(id));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLogin userLogin){
        return ResponseEntity.ok(userService.loginUser(userLogin));
    }

}
