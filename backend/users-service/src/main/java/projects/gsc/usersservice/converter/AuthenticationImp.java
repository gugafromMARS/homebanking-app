package projects.gsc.usersservice.converter;

import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import projects.gsc.usersservice.dto.UserLogin;
import projects.gsc.usersservice.model.User;


@Component
@AllArgsConstructor
public class AuthenticationImp implements Authentication{

    private final PasswordEncoder passwordEncoder;

    @Override
    public boolean login(User user, UserLogin userLogin) {
        return passwordEncoder.matches(userLogin.getPwd(), user.getPwd());
    }
}
