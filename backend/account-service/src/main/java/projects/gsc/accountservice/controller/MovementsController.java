package projects.gsc.accountservice.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projects.gsc.accountservice.dto.MovementCreateDto;
import projects.gsc.accountservice.service.AccountService;

@RestController
@RequestMapping("/api/account/movements")
@CrossOrigin(origins = "*")
public class MovementsController {

    private final AccountService accountService;

    public MovementsController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping
    public ResponseEntity<?> get(@RequestParam Long id){
        return new ResponseEntity<>(accountService.getMovementsById(id), HttpStatus.CREATED);
    }

    @PostMapping("/payment")
    public ResponseEntity<?> payment(@RequestBody MovementCreateDto movementCreateDto){
        return new ResponseEntity<>(accountService.paymentForRefAndEntity(movementCreateDto), HttpStatus.CREATED);
    }

    @PostMapping("/transfer")
    public ResponseEntity<?> transfer(@RequestBody MovementCreateDto movementCreateDto){
        return new ResponseEntity<>(accountService.transferForOtherAcc(movementCreateDto), HttpStatus.CREATED);
    }

    @PostMapping("/deposit")
    public ResponseEntity<?> deposit(@RequestBody MovementCreateDto movementCreateDto){
        return new ResponseEntity<>(accountService.depositInAcc(movementCreateDto), HttpStatus.CREATED);
    }


}
