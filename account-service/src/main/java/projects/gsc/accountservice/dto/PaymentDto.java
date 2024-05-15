package projects.gsc.accountservice.dto;


import lombok.*;
import projects.gsc.accountservice.model.MovementType;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentDto {

    private String date;
    private MovementType type;
    private double amount;
    private int ref;
    private int entity;
}
