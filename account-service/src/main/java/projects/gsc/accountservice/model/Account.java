package projects.gsc.accountservice.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Entity
@Table(name = "account")
@Getter
@Setter
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private String ownerName;
    private String ownerEmail;
    private double balance;

    @ElementCollection
    private Map<Date, Movement> movementsList;

    public static AccountBuilder builder (){
        return new AccountBuilder();
    }

    public static class AccountBuilder {
        private Account account;

        public AccountBuilder() {
            this.account = new Account();
        }

        public AccountBuilder withOwnerName(String name){
            account.setOwnerName(name);
            return this;
        }
        public AccountBuilder withEmail(String email){
            account.setOwnerEmail(email);
            return this;
        }

        public AccountBuilder withBalance(){
            account.setBalance(0.0);
            return this;
        }

        public AccountBuilder withMovements(){
            account.setMovementsList(new HashMap<>());
            return this;
        }


    }

}
