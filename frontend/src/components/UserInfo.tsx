import { FunctionComponent, ReactElement } from "react";
import "./UserInfo.css";
import image from "../assets/user.png";
import { OperationType } from "../pages/dashboard/Dashboard";

interface OperationProps {
  handleOperationClick: (operation: OperationType) => void;
}

export const UserInfo: FunctionComponent<OperationProps> = ({
  handleOperationClick,
}): ReactElement => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${day}-${month}-${year}`;
  return (
    <div
      onClick={() => handleOperationClick(null)}
      className={`user rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex-col space-y-4 mt-0 self-center`}
    >
      <div className="user-img">
        <img src={image} alt="" />
      </div>
      <div className="user-info">
        <p>
          <span>{currentDate}</span>
        </p>
        <p>
          Olá, <span>Admin</span>
        </p>
        <p>
          <span>Number Account</span>: 12924
        </p>
        <p>
          <span>Balance</span>= 10000€
        </p>
      </div>
    </div>
  );
};
