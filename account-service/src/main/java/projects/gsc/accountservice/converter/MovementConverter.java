package projects.gsc.accountservice.converter;


import org.springframework.stereotype.Component;
import projects.gsc.accountservice.dto.MovementCreateDto;
import projects.gsc.accountservice.dto.MovementDto;
import projects.gsc.accountservice.model.Movement;
import projects.gsc.accountservice.model.MovementType;

@Component
public class MovementConverter {


    public MovementDto toDto(Movement movement){

    }

    public Movement fromCreateDto(MovementCreateDto movementCreateDto){
        MovementType movementType = getMoveType(movementCreateDto);
        return Movement.builder().type(movementType)
                .amount(movementCreateDto.getAmount())
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
