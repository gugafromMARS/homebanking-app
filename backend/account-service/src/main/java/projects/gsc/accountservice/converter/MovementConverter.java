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


    public DepositDto depositDto( Movement movement){


        return DepositDto.builder()
                .date(movement.getDate())
                .type(movement.getType())
                .amount(movement.getAmount())
                .build();
    }

    public PaymentDto toPaymentDto( Movement movement){

        return PaymentDto.builder()
                .date(movement.getDate())
                .type(movement.getType())
                .amount(movement.getAmount())
                .ref(movement.getRef())
                .entity(movement.getEntity())
                .build();
    }

    public TransferDto toTransferDto( Movement movement){

        return TransferDto.builder()
                .date(movement.getDate())
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
