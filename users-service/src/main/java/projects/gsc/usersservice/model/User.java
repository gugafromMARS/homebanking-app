package projects.gsc.usersservice.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private String name;
    private int age;
    private String address;
    private String email;
    private String pwd;

    public  UserBuilder builder(){
        return new UserBuilder();
    }

    public static class UserBuilder{
        private User user;

        public UserBuilder() {
            this.user = new User();
        }

        public UserBuilder withName(String name){
            user.setName(name);
            return this;
        }
        public UserBuilder withAge(int age){
            user.setAge(age);
            return this;
        }

        public UserBuilder withAddress(String address){
            user.setAddress(address);
            return  this;
        }
        public UserBuilder withEmail (String email) {
            user.setEmail(email);
            return this;
        }

        // mudar wuando tivermos a parte do enconder
        public UserBuilder withPwd(String pwd){
            user.setPwd(pwd);
            return this;
        }

        public User build(){
            return user;
        }
    }

}
