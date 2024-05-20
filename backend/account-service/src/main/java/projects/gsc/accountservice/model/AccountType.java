package projects.gsc.accountservice.model;

public enum AccountType {

    CURRENT("CURRENT"),
    SAVINGS("SAVINGS");

    private final String type;

    AccountType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}
