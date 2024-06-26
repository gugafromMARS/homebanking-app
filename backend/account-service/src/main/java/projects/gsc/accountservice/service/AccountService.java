package projects.gsc.accountservice.service;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import projects.gsc.accountservice.calculator.BankMovements;
import projects.gsc.accountservice.converter.AccountConverter;
import projects.gsc.accountservice.dto.*;
import projects.gsc.accountservice.model.Account;
import projects.gsc.accountservice.model.Movement;
import projects.gsc.accountservice.repository.AccountRepository;

import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class AccountService {


    private final AccountRepository accountRepository;
    private final AccountConverter converter;
    private final BankMovements bankMovements;




    public AccountDto getAccountById(Long id) {
        return accountRepository.findById(id).map(project -> converter.toDto(project))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Account not found"));
    }


    public AccountDto create(AccountCreateDto accountCreateDto) {
        if(accountCreateDto.getAge() < 18){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Need to be older than 17");
        }
        List<Account> existingAccounts = accountRepository.findByOwnerEmail(accountCreateDto.getOwnerEmail());
        if(existingAccounts.size() > 0){
            for(Account account : existingAccounts){
                if(account.getAccountType().getType().equals(accountCreateDto.getAccType().toUpperCase())){
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Account already exists");
                }
            }
        }
        Account account = accountRepository.save(converter.fromCreateDto(accountCreateDto));
        return converter.toDto(account);
    }


    public Double getBalanceById(Long id) {
        Account existingAcc = thisAccExists(id);
        return existingAcc.getBalance();
    }


    public PaymentDto paymentForRefAndEntity(MovementCreateDto movementCreateDto) {
        Account existingAcc = thisAccExists(movementCreateDto);
            return bankMovements.payment(existingAcc, movementCreateDto);
    }

    public TransferDto transferForOtherAcc(MovementCreateDto movementCreateDto) {
        Account existingAcc = thisAccExists(movementCreateDto);
        return bankMovements.transfer(existingAcc, movementCreateDto);
    }

    public DepositDto depositInAcc(MovementCreateDto movementCreateDto) {
        Account existingAcc = thisAccExists(movementCreateDto);
        return bankMovements.deposit(existingAcc, movementCreateDto);
    }


    private Account thisAccExists(MovementCreateDto movementCreateDto){
        return accountRepository.findById(movementCreateDto.getAccNumber())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Account not found"));
    }
    private Account thisAccExists(Long id){
        return accountRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Account not found"));
    }


    public List<Movement> getMovementsById(Long id) {
        Account existingAcc = accountRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Account not found"));
        return existingAcc.getMovementsList();
    }


    public List<AccountDto> getAccountsByEmail(String email) {
        return accountRepository.findByOwnerEmail(email).stream().map(account -> converter.toDto(account))
                .toList();
    }
}
