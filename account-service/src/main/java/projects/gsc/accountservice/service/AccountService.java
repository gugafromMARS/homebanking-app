package projects.gsc.accountservice.service;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import projects.gsc.accountservice.calculator.BankMovements;
import projects.gsc.accountservice.converter.AccountConverter;
import projects.gsc.accountservice.converter.MovementConverter;
import projects.gsc.accountservice.dto.AccountCreateDto;
import projects.gsc.accountservice.dto.AccountDto;
import projects.gsc.accountservice.dto.MovementCreateDto;
import projects.gsc.accountservice.dto.MovementDto;
import projects.gsc.accountservice.model.Account;
import projects.gsc.accountservice.repository.AccountRepository;

import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class AccountService {

    private final AccountRepository accountRepository;
    private final AccountConverter converter;
    private final BankMovements bankMovements;
    private final MovementConverter movementConverter;



    public AccountDto getAccountById(Long id) {
        return accountRepository.findById(id).map(project -> converter.toDto(project))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Account not found"));
    }


    public AccountDto create(AccountCreateDto accountCreateDto) {
        List<Account> existingAccounts = accountRepository.findByOwnerEmail(accountCreateDto.getOwnerEmail());
        if(existingAccounts.size() > 0){
            for(Account account : existingAccounts){
                if(account.getAccountType().getType().equals(accountCreateDto.getAccType().toUpperCase())){
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Account already exists");
                }
            }
        }
        Account account = persistNewAccount(accountCreateDto);
        return converter.toDto(account);
    }

    private Account persistNewAccount (AccountCreateDto accountCreateDto){
        return accountRepository.save(converter.fromCreateDto(accountCreateDto));
    }

    public Double getBalanceById(Long id) {
        Account existingAcc = accountRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Account not found"));
        return existingAcc.getBalance();
    }


    public MovementDto withdrawById(MovementCreateDto movementCreateDto) {
            Account existingAcc = accountRepository.findById(movementCreateDto.getAccountNumber())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Account not found"));
            return bankMovements.withdraw(existingAcc, movementCreateDto);

    }
}
