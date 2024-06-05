import { FunctionComponent, ReactElement } from "react";
import "./UserInfo.css";
import image from "../assets/user.png";
import { OperationType } from "../pages/dashboard/Dashboard";
import { NoAccount } from "./NoAccount";

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

interface OperationProps {
  handleOperationClick: (operation: OperationType) => void;
  user: UserDto;
}

export const UserInfo: FunctionComponent<OperationProps> = ({
  handleOperationClick,
  user,
}): ReactElement => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${day}-${month}-${year}`;

  const haveAcc: boolean = user.user.accounts.length > 0;

  return (
    <div
      onClick={() => handleOperationClick(null)}
      className={`user rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex-col space-y-4`}
    >
      <div className="user-info">
        <img src={image} alt="" />
        <div className="information">
          <div className="info">
            <p>
              <span>{currentDate}</span>
            </p>
            <p>
              Olá, <span>{user.user.ownerName}</span>
            </p>
          </div>
          {/*!haveAcc && (
          <NoAccount handleOperationClick={handleOperationClick} user={user} />
        )*/}
          <div className="acc-info">
            <div className="balance">
              <h1>Balance</h1>
              <p>10000.00€</p>
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
        </div>
      </div>
    </div>
  );
};
