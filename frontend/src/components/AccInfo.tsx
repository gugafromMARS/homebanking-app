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
  deposits: number;
  expenses: number;
}

export const AccInfo: FunctionComponent<AccInfoProps> = ({
  activeAcc,
  deposits,
  expenses,
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
        {!activeAcc && <p>0€</p>}
        {activeAcc && <p>{deposits}</p>}
      </div>
      <div className="outcome">
        <h1>Expense</h1>
        {!activeAcc && <p>0€</p>}
        {activeAcc && <p>{expenses}</p>}
      </div>
    </div>
  );
};
