package projects.gsc.accountservice.service;


import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import projects.gsc.accountservice.converter.AccountConverter;
import projects.gsc.accountservice.dto.AccountCreateDto;
import projects.gsc.accountservice.dto.AccountDto;
import projects.gsc.accountservice.model.Account;
import projects.gsc.accountservice.repository.AccountRepository;

import java.util.List;

@Service
public class AccountService {

    private final AccountRepository accountRepository;
    private final AccountConverter converter;

    public AccountService(AccountRepository accountRepository, AccountConverter converter) {
        this.accountRepository = accountRepository;
        this.converter = converter;
    }

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
}
