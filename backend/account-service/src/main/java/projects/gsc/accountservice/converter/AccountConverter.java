package projects.gsc.accountservice.converter;


import org.springframework.stereotype.Component;
import projects.gsc.accountservice.dto.AccountCreateDto;
import projects.gsc.accountservice.dto.AccountDto;
import projects.gsc.accountservice.model.Account;

@Component
public class AccountConverter {

    public Account fromCreateDto(AccountCreateDto accountCreateDto){
        return new Account().builder()
                .withOwnerName(accountCreateDto.getOwnerName())
                .withAge(accountCreateDto.getAge())
                .withAddress(accountCreateDto.getAddress())
                .withEmail(accountCreateDto.getOwnerEmail())
                .withBalance()
                .withAccType(accountCreateDto.getAccType())
                .withMovements()
                .build();
    }

  public AccountDto toDto(Account account){
        return AccountDto.builder()
                .id(account.getId())
                .ownerName(account.getOwnerName())
                .ownerEmail(account.getOwnerEmail())
                .balance(account.getBalance())
                .accType(account.getAccountType().getType())
                .build();
    }


}
