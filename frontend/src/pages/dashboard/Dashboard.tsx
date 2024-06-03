import { FunctionComponent, ReactElement } from "react";
import "./Dashboard.css";
import Footer from "../../components/Footer";
import { Operations } from "../../components/Operations";
import { Moviments } from "../../components/Moviments";
import { useState } from "react";
import { Deposit } from "../../components/Deposit";
import { Payment } from "../../components/Payment";
import { Transfer } from "../../components/Transfer";
import { NoAccount } from "../../components/NoAccount";

export type OperationType =
  | "Movements"
  | "Deposit"
  | "Payment"
  | "Transfer"
  | null;

interface Accounts {
  id: number;
  ownerName: string;
  ownerEmail: string;
  balance: number;
  accType: string;
}

interface UserDto {
  ownerName: string;
  ownerEmail: string;
  accounts: Accounts[];
}

export const Dashboard: FunctionComponent<UserDto> = (
  userDto: UserDto
): ReactElement => {
  const [activeOperation, setActiveOperation] = useState<OperationType>(null);
  const [haveAcc, setHaveAcc] = useState<boolean>(userDto.accounts);

  const handleOperationClick = (operation: OperationType): void => {
    setActiveOperation(operation);
  };

  return (
    <>
      <section className="dashboard">
        {haveAcc && (
          <Operations
            handleOperationClick={handleOperationClick}
            user={userDto}
          />
        )}
        {!haveAcc && (
          <NoAccount
            handleOperationClick={handleOperationClick}
            user={userDto}
          />
        )}
      </section>
      {activeOperation === "Movements" && (
        <section className="operations-section">
          <Moviments />
        </section>
      )}
      {activeOperation === "Deposit" && (
        <section className="operations-section">
          <Deposit />
        </section>
      )}
      {activeOperation === "Payment" && (
        <section className="operations-section">
          <Payment />
        </section>
      )}
      {activeOperation === "Transfer" && (
        <section className="operations-section">
          <Transfer />
        </section>
      )}
      <div className={`${!activeOperation ? "dashboard-footer" : "foot"}`}>
        <Footer />
      </div>
      <div className="login-block"></div>
    </>
  );
};
