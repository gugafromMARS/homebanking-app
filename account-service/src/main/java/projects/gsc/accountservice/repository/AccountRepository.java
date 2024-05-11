package projects.gsc.accountservice.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import projects.gsc.accountservice.model.Account;

@Repository
public interface AccountRepository extends JpaRepository<Long, Account> {
}
