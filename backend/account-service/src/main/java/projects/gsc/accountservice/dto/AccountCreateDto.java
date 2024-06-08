package projects.gsc.accountservice.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AccountCreateDto {

    private String ownerName;
    private String ownerEmail;
    private int age;
    private String address;
    private String accType;

}
