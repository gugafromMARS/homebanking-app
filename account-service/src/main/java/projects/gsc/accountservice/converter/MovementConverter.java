package projects.gsc.accountservice.converter;


import org.springframework.stereotype.Component;
import projects.gsc.accountservice.dto.MovementCreateDto;
import projects.gsc.accountservice.dto.PaymentDto;
import projects.gsc.accountservice.dto.TransferDto;
import projects.gsc.accountservice.dto.DepositDto;
import projects.gsc.accountservice.model.Account;
import projects.gsc.accountservice.model.Movement;
import projects.gsc.accountservice.model.MovementType;

import java.time.LocalDate;
import java.util.List;

@Component
public class MovementConverter {


    public DepositDto depositDto(Account account, Movement movement){
        List<String> dates = account.getMovementsList().keySet().stream().toList();

        return DepositDto.builder()
                .date(dates.get(dates.size() - 1))
                .type(movement.getType())
                .amount(movement.getAmount())
                .build();
    }

    public PaymentDto toPaymentDto(Account account, Movement movement){
        List<String> dates = account.getMovementsList().keySet().stream().toList();
        return PaymentDto.builder()
                .date(dates.get(dates.size() - 1))
                .type(movement.getType())
                .amount(movement.getAmount())
                .ref(movement.getRef())
                .entity(movement.getEntity())
                .build();
    }

    public TransferDto toTransferDto(Account account, Movement movement){
        List<String> dates = account.getMovementsList().keySet().stream().toList();
        return TransferDto.builder()
                .date(dates.get(dates.size() - 1))
                .type(movement.getType())
                .amount(movement.getAmount())
                .receiptAccNumber(movement.getReceiptAccNumber())
                .build();

    }

    public Movement fromCreateDto(MovementCreateDto movementCreateDto){
        MovementType movementType = getMoveType(movementCreateDto);
        return Movement.builder()
                .type(movementType)
                .amount(movementCreateDto.getAmount())
                .date(LocalDate.now().toString())
                .receiptAccNumber(movementCreateDto.getReceiptAccNumber())
                .entity(movementCreateDto.getEntity())
                .ref(movementCreateDto.getRef())
                .build();
    }


    private MovementType getMoveType(MovementCreateDto movementCreateDto){
        for(MovementType mt : MovementType.values()){
            if(mt.getType().equals(movementCreateDto.getType().toUpperCase())){
                return mt;
            }
        }
        return MovementType.DEPOSIT;
    }

}
