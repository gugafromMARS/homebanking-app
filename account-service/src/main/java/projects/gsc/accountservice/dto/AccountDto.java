package projects.gsc.accountservice.dto;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AccountDto {

    private Long id;
    private String ownerName;
    private String ownerEmail;
    private double balance;
    private String accType;
}
