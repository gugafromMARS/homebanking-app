import { FunctionComponent, ReactElement } from "react";
import "./AccInfo.css";

interface Accounts {
  id: number;
  ownerName: string;
  ownerEmail: string;
  balance: number;
  accType: string;
}

interface AccInfoProps {
  activeAcc: Accounts | null;
}

export const AccInfo: FunctionComponent<AccInfoProps> = ({
  activeAcc,
}): ReactElement => {
  return (
    <div className="acc-info">
      <div className="balance">
        <h1>Balance</h1>
        {activeAcc && <p>{activeAcc.balance}€</p>}
        {!activeAcc && <p>0€</p>}
      </div>
      <div className="income">
        <h1>Income</h1>
        <p>+1000.00€</p>
      </div>
      <div className="outcome">
        <h1>Expense</h1>
        <p>-600.00€</p>
      </div>
    </div>
  );
};
