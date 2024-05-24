import { FunctionComponent, ReactElement } from "react";
import "./Dashboard.css";
import Footer from "../../components/Footer";
import { Operations } from "../../components/Operations";
import { Moviments } from "../../components/Moviments";
import { useState } from "react";

export type OperationType =
  | "Movements"
  | "Deposit"
  | "Payment"
  | "Transfer"
  | null;

export const Dashboard: FunctionComponent = (): ReactElement => {
  const [activeOperation, setActiveOperation] = useState<OperationType>(null);

  const handleOperationClick = (operation: OperationType): void => {
    setActiveOperation(operation);
  };

  return (
    <>
      <section className="dashboard">
        <Operations handleOperationClick={handleOperationClick} />
      </section>
      {activeOperation === "Movements" && (
        <section className="operations-section">
          <Moviments />
        </section>
      )}
      <div className={`${!activeOperation ? "dashboard-footer" : ""}`}>
        <Footer />
      </div>
      <div className="login-block"></div>
    </>
  );
};
