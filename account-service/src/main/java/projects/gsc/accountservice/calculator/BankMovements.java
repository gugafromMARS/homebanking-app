package projects.gsc.accountservice.calculator;


import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;
import projects.gsc.accountservice.converter.MovementConverter;
import projects.gsc.accountservice.dto.MovementCreateDto;
import projects.gsc.accountservice.dto.MovementDto;
import projects.gsc.accountservice.model.Account;
import projects.gsc.accountservice.model.Movement;
import projects.gsc.accountservice.repository.AccountRepository;

import java.text.SimpleDateFormat;
import java.util.Date;


@Component
@AllArgsConstructor
public class BankMovements {


    private final AccountRepository accountRepository;
    private final MovementConverter movementConverter;

    public MovementDto withdraw(Account account, MovementCreateDto movementCreateDto){
        if(account.getBalance() >= movementCreateDto.getAmount()){
            account.setBalance(account.getBalance() - movementCreateDto.getAmount());
            Movement movement = updateMovementsInAcc(account, movementCreateDto);
            return movementConverter.toDto(movement);
        }
        throw  new ResponseStatusException(HttpStatus.BAD_REQUEST, "Don't have enough funds");
    }

    public MovementDto payment(Account account, Long accountPaymentNumber, MovementCreateDto movementCreateDto){
        Account receiverAccount = accountRepository
                .findById(accountPaymentNumber)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Account not found"));
        Movement movement;

        if(account.getBalance() >= movementCreateDto.getAmount()){
            account.setBalance(account.getBalance() - movementCreateDto.getAmount());
            movement = updateMovementsInAcc(account, movementCreateDto);
            receiverAccount.setBalance(receiverAccount.getBalance() + movementCreateDto.getAmount());
            movementCreateDto.setType("RECEIPT");
            updateMovementsInAcc(receiverAccount, movementCreateDto);
            return movementConverter.toDto(movement);
        }
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Don't have enough funds");
    }

    public MovementDto deposit(Account account, MovementCreateDto movementCreateDto){
        account.setBalance(account.getBalance() + movementCreateDto.getAmount());
        Movement movement = updateMovementsInAcc(account, movementCreateDto);
        return movementConverter.toDto(movement);
    }

    private Movement updateMovementsInAcc(Account account, MovementCreateDto movementCreateDto){
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = new Date();
        Movement movement = movementConverter.fromCreateDto(movementCreateDto);
        account.getMovementsList().put(dateFormat.format(date), movement);
        accountRepository.save(account);
        return movement;
    }


}
