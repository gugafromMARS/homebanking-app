package projects.gsc.accountservice.dto;


import lombok.*;
import projects.gsc.accountservice.model.MovementType;


@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class WithdrawOrDepositDto {

    private String date;
    private MovementType type;
    private double amount;
}
