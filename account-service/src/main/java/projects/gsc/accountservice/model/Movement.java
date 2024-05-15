package projects.gsc.accountservice.model;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Embeddable
@Builder
@AllArgsConstructor
public class Movement {

    private MovementType type;
    private double amount;
    private String date;
    //for transfer
    private Long receiptAccNumber;
    //for payment
    private int ref;
    private int entity;


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

    public Long getReceiptAccNumber() {
        return receiptAccNumber;
    }

    public void setReceiptAccNumber(Long receiptAccNumber) {
        this.receiptAccNumber = receiptAccNumber;
    }

    public int getRef() {
        return ref;
    }

    public void setRef(int ref) {
        this.ref = ref;
    }

    public int getEntity() {
        return entity;
    }

    public void setEntity(int entity) {
        this.entity = entity;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
