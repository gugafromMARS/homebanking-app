package projects.gsc.accountservice.model;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Embedded;

@Embeddable
public class Movement {
    private MovementType type;
    private double amount;

    public Movement(MovementType type, double amount) {
        this.type = type;
        this.amount = amount;
    }

    public Movement() {

    }

    public MovementType getType() {
        return type;
    }

    public void setType(MovementType type) {
        this.type = type;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}
