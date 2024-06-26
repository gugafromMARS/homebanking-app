package projects.gsc.accountservice.model;

public enum MovementType {

    DEPOSIT("DEPOSIT"),
    RECEIPT("RECEIPT"),
    TRANSFER("TRANSFER"),
    PAYMENT("PAYMENT");

    private final String type;

    MovementType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}
