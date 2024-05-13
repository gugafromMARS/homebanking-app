package projects.gsc.accountservice.model;

public enum MovementType {

    DEPOSIT("DEPOSIT"),
    WITHDRAW("WITHDRAW"),
    RECEIPT("RECEIPT"),
    PAYMENT("PAYMENT");

    private final String type;

    MovementType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}
