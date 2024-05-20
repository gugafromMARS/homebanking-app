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
    private int age;
    private String address;
    private String ownerEmail;
    private AccountType accountType;
    private double balance;
    private int pin;

    @ElementCollection
    private Map<String, Movement> movementsList;

    public AccountBuilder builder (){
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

        public AccountBuilder withAge(int age){
            account.setAge(age);
            return this;
        }

        public AccountBuilder withAddress(String address){
            account.setAddress(address);
            return this;
        }

        public AccountBuilder withAccType(String type){
            if(type.toUpperCase().equals(AccountType.SAVINGS.getType())){
                account.setAccountType(AccountType.SAVINGS);
                return this;
            }
            account.setAccountType(AccountType.CURRENT);
            return this;
        }

        public AccountBuilder withPin(int pin){
            account.setPin(pin);
            return this;
        }

        public Account build(){
            return account;
        }


    }

}
