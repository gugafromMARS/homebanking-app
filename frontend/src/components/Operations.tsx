import { FunctionComponent, ReactElement } from "react";
import "./Operations.css";
import { operations } from "../data";
import { Operation } from "../components/Operation";

import { OperationType } from "../pages/dashboard/Dashboard";

interface OperationProps {
  handleOperationClick: (operation: OperationType) => void;
}

export const Operations: FunctionComponent<OperationProps> = ({
  handleOperationClick,
}): ReactElement => {
  return (
    <div className="operations ">
      {operations.map(({ id, name, icon, col, row }, index) => {
        return (
          <Operation
            key={index}
            id={id}
            name={name}
            icon={icon}
            col={col}
            row={row}
            handleOperationClick={() => handleOperationClick(name)}
          />
        );
      })}
    </div>
  );
};
