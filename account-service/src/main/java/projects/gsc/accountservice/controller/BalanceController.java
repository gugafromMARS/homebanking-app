package projects.gsc.accountservice.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import projects.gsc.accountservice.service.AccountService;

@RestController
@RequestMapping("/api/account/balance")
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
