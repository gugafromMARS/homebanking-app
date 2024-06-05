import { FunctionComponent, ReactElement } from "react";
import CIcon from "@coreui/icons-react";
import "./Operation.css";
import { OperationType } from "../pages/dashboard/Dashboard";

interface OperationProps {
  id: string;
  name: OperationType;
  icon: string[];

  handleOperationClick: (operation: OperationType) => void;
}

export const Operation: FunctionComponent<OperationProps> = ({
  id,
  name,
  icon,

  handleOperationClick,
}): ReactElement => {
  return (
    <div
      className={`operation position-${id} row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 text-center `}
      onClick={() => handleOperationClick(name)}
    >
      <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
        {name}
      </div>
      <CIcon icon={icon} size="sm" />
    </div>
  );
};
