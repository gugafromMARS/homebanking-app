package projects.gsc.usersservice.converter;


import projects.gsc.usersservice.dto.UserLogin;
import projects.gsc.usersservice.model.User;

public interface Authentication {

    boolean login(User user, UserLogin userLogin);
}
