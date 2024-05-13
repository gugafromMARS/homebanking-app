package projects.gsc.accountservice.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovementCreateDto {

    private Long accountNumber;
    private String type;
    private double amount;
}
