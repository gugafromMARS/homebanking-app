import { FunctionComponent, ReactElement } from "react";
import "./Operations.css";
import { operations } from "../data";
import { Operation } from "../components/Operation";
import { UserInfo } from "../components/UserInfo";
import { OperationType } from "../pages/dashboard/Dashboard";

interface OperationProps {
  handleOperationClick: (operation: OperationType) => void;
}

export const Operations: FunctionComponent<OperationProps> = ({
  handleOperationClick,
}): ReactElement => {
  return (
    <div className="operations ">
      <UserInfo handleOperationClick={() => handleOperationClick(null)} />
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
