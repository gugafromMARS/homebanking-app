package projects.gsc.accountservice.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projects.gsc.accountservice.dto.AccountCreateDto;
import projects.gsc.accountservice.service.AccountService;

@RestController
@RequestMapping("/api/account")
@CrossOrigin(origins = "*")
public class AccountController {

    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping
    public ResponseEntity<?> getAccount (@RequestParam Long id){
        return ResponseEntity.ok(accountService.getAccountById(id));
    }

    @GetMapping("/getAccounts")
    public ResponseEntity<?> getAccounts(@RequestParam String email){
        return ResponseEntity.ok(accountService.getAccountsByEmail(email));
    }

    @PostMapping
    public ResponseEntity<?> createAccount(@RequestBody AccountCreateDto accountCreateDto){
        return new ResponseEntity<>(accountService.create(accountCreateDto), HttpStatus.CREATED);
    }


}
