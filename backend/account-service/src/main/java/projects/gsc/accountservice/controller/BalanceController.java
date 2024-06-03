package projects.gsc.accountservice.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projects.gsc.accountservice.service.AccountService;

@RestController
@RequestMapping("/api/account/balance")
@CrossOrigin(origins = "*")
public class BalanceController {

    private final AccountService accountService;

    public BalanceController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping
    public ResponseEntity<?> getBalance(@RequestParam Long id){
        return ResponseEntity.ok(accountService.getBalanceById(id));
    }
}
