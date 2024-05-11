package projects.gsc.accountservice.service;


import org.springframework.stereotype.Service;
import projects.gsc.accountservice.converter.AccountConverter;
import projects.gsc.accountservice.repository.AccountRepository;

@Service
public class AccountService {


    private final AccountRepository accountRepository;
    private final AccountConverter converter;

    public AccountService(AccountRepository accountRepository, AccountConverter converter) {
        this.accountRepository = accountRepository;
        this.converter = converter;
    }
}
