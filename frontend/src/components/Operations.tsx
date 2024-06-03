import { FunctionComponent, ReactElement } from "react";
import "./Operations.css";
import { operations } from "../data";
import { Operation } from "../components/Operation";
import { UserInfo } from "../components/UserInfo";
import { OperationType } from "../pages/dashboard/Dashboard";

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

export const Operations: FunctionComponent<OperationProps> = ({
  handleOperationClick,
  user,
}): ReactElement => {
  return (
    <div className="operations ">
      <UserInfo
        handleOperationClick={() => handleOperationClick(null)}
        user={user}
      />
      {operations.map(({ id, name, icon }, index) => {
        return (
          <Operation
            key={index}
            id={id}
            name={name}
            icon={icon}
            handleOperationClick={() => handleOperationClick(name)}
          />
        );
      })}
    </div>
  );
};
