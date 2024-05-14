package projects.gsc.accountservice.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovementCreateDto {

    private Long accNumber;
    private String type;
    private double amount;
    private Long receiptAccNumber;
    private int ref;
    private Long entity;
}
