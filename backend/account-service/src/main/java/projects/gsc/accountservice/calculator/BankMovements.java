package projects.gsc.accountservice.calculator;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;
import projects.gsc.accountservice.converter.MovementConverter;
import projects.gsc.accountservice.dto.MovementCreateDto;
import projects.gsc.accountservice.dto.PaymentDto;
import projects.gsc.accountservice.dto.TransferDto;
import projects.gsc.accountservice.dto.DepositDto;
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


    public PaymentDto payment(Account account, MovementCreateDto movementCreateDto){

        if(haveMoney(account, movementCreateDto)){
            account.setBalance(account.getBalance() - movementCreateDto.getAmount());
            Movement movement = updateMovementsInAcc(account, movementCreateDto);
            return movementConverter.toPaymentDto( movement);
        }
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Don't have enough funds");
    }

    public DepositDto deposit(Account account, MovementCreateDto movementCreateDto){
        account.setBalance(account.getBalance() + movementCreateDto.getAmount());
        Movement movement = updateMovementsInAcc(account, movementCreateDto);
        return movementConverter.depositDto( movement);
    }

    public TransferDto transfer(Account account, MovementCreateDto movementCreateDto){
        Account receiverAccount = accountRepository
                .findById(movementCreateDto.getReceiptAccNumber())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Account not found"));
        Movement movement;
        if(haveMoney(account, movementCreateDto)){
            account.setBalance(account.getBalance() - movementCreateDto.getAmount());
            movement = updateMovementsInAcc(account, movementCreateDto);
            receiverAccount.setBalance(receiverAccount.getBalance() + movementCreateDto.getAmount());
            movementCreateDto.setType("RECEIPT");
            updateMovementsInAcc(receiverAccount, movementCreateDto);
            return movementConverter.toTransferDto( movement);
        }
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Don't have enough funds");
    }

    private Movement updateMovementsInAcc(Account account, MovementCreateDto movementCreateDto){
        Movement movement = movementConverter.fromCreateDto(movementCreateDto);
        account.getMovementsList().add(movement);
        accountRepository.save(account);
        return movement;
    }

    private boolean haveMoney(Account account, MovementCreateDto movementCreateDto){
        return account.getBalance() >= movementCreateDto.getAmount();
    }

}
