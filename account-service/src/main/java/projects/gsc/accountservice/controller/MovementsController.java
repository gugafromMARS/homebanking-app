package projects.gsc.accountservice.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projects.gsc.accountservice.dto.MovementCreateDto;
import projects.gsc.accountservice.service.AccountService;

@RestController
@RequestMapping("/api/account/movements")
public class MovementsController {

    private final AccountService accountService;

    public MovementsController(AccountService accountService) {
        this.accountService = accountService;
    }

    @PostMapping
    public ResponseEntity<?> withdraw(@RequestBody MovementCreateDto movementCreateDto){
        return new ResponseEntity<>(accountService.withdrawById(movementCreateDto), HttpStatus.CREATED);
    }
}
