import { FunctionComponent, ReactElement, useEffect } from "react";
import "./Dashboard.css";
import Footer from "../../components/Footer";
import { Operations } from "../../components/Operations";
import { Movements } from "../../components/Movements";
import { useState } from "react";
import { Deposit } from "../../components/Deposit";
import { Payment } from "../../components/Payment";
import { Transfer } from "../../components/Transfer";
import { UserInfo } from "../../components/UserInfo";
import Chart from "../../components/Chart";
import { Card } from "../../components/Card";
import { CreateAccount } from "../../components/CreateAccount";
import {
  deposit,
  getAccounts,
  getMovements,
  payment,
  transfer,
} from "../../components/Requests";
import { AccInfo } from "../../components/AccInfo";
import { UserDto } from "../../App";

export type OperationType =
  | "Deposit"
  | "Payment"
  | "Transfer"
  | "Create"
  | null;

interface Accounts {
  id: number;
  ownerName: string;
  ownerEmail: string;
  balance: number;
  accType: string;
}

interface DashboardProps {
  user: UserDto;
}

export interface MovesDto {
  amount: number;
  date: string;
  entity: number;
  receiptAccNumber: number | null;
  ref: number;
  type: string;
}

export interface MoveCreateDto {
  accNumber: number;
  type: string;
  amount: number;
  entity: number | null;
  receiptAccNumber: number | null;
  ref: number | null;
}

const BTNGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export const Dashboard: FunctionComponent<DashboardProps> = ({
  user,
}): ReactElement => {
  const [activeOperation, setActiveOperation] = useState<OperationType>(null);
  const [accs, setAccs] = useState<Accounts[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [accActive, setAccActive] = useState<Accounts | null>(null);
  const [accMoves, setAccMoves] = useState<MovesDto[]>([]);
  const [totalDeposit, setTotalDeposit] = useState<number>(0);
  const [totalExpenses, setTotalExpenses] = useState<number>(0);

  useEffect(() => {
    handleAccs();
  }, [accs, accActive]);

  async function handleAccs() {
    try {
      const accs = await getAccounts(user.ownerEmail);
      setAccs([...accs]);
      if (accActive == null) {
        setAccActive(accs[0]);
        const moves = await getMovements(accs[0].id);
        setAccMoves([...moves].reverse());
        calculateTotals([...moves]);
      } else {
        const moves = await getMovements(accActive.id);
        setAccMoves([...moves].reverse());
        calculateTotals([...moves]);
      }
    } catch (error: any) {
      setError(new Error(error.message || "Failed to create acc"));
    }
  }

  const calculateTotals = (moves: MovesDto[]): void => {
    let deposits: number = 0;
    let expenses: number = 0;

    if (moves.length > 0) {
      moves.map((move) => {
        if (move.type === "DEPOSIT") {
          deposits = deposits + move.amount;
        } else {
          expenses = expenses + move.amount;
        }
      });
    }
    setTotalExpenses(expenses);
    setTotalDeposit(deposits);
  };

  async function handleOperationExecute(newDeposit: MoveCreateDto) {
    try {
      if (activeOperation === "Deposit") {
        await deposit(newDeposit);
      }
      if (activeOperation === "Payment") {
        await payment(newDeposit);
      }
      if (activeOperation === "Transfer") {
        await transfer(newDeposit);
      }
    } catch (error: any) {
      setError(new Error(error.message || "Failed to make the "));
    }
  }

  const handleOperationClick = (operation: OperationType): void => {
    setActiveOperation(operation);
  };

  const handleOperationClose = (): void => {
    setActiveOperation(null);
  };

  const handleCreatingAcc = (): void => {
    setActiveOperation("Create");
  };

  const handleActiveAcc = (acc: Accounts): void => {
    setAccActive(acc);
  };

  return (
    <>
      <section className="dashboard">
        <div className="user-information rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex-col space-y-4">
          <UserInfo user={user} handleOperationClick={handleOperationClick} />
          <AccInfo
            activeAcc={accActive}
            deposits={totalDeposit}
            expenses={totalExpenses}
          />
        </div>
        {accs.length > 0 && (
          <>
            <div className="chart-section">
              <Chart movements={accMoves} />
            </div>
            <div className="card-section">
              <h1>Your Cards (swipe left and right)</h1>
              {accs.length < 2 && (
                <button
                  className="btn-card2 bg-gradient-to-br relative group/btn from-black w-1/4 dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800  text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                  onClick={handleCreatingAcc}
                >
                  Create new account &rarr;
                  <BTNGradient />
                </button>
              )}
              <Card accounts={accs} handleActiveAcc={handleActiveAcc} />
            </div>

            <div className="operations-dash">
              <Operations handleOperationClick={handleOperationClick} />
            </div>
            <section className="movements-dash">
              <h1>Movements</h1>
              <Movements movements={accMoves} />
            </section>
          </>
        )}
        {accs.length == 0 && (
          <>
            <div className="chart-section">
              <Chart />
            </div>
            <div className="card-section">
              <h2 className="no-card">No accounts available yet</h2>
              <button
                className="btn-card mt-10 bg-gradient-to-br relative group/btn from-black w-1/4 dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800  text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
                onClick={handleCreatingAcc}
              >
                Create new account &rarr;
                <BTNGradient />
              </button>
            </div>
            <div className="operations-dash">
              <Operations
                handleOperationClick={handleOperationClick}
                accs={accs}
              />
            </div>
            <section className="movements-dash">
              <h1>Movements</h1>
              <Movements movements={accMoves} />
            </section>
          </>
        )}

        {activeOperation === "Create" && (
          <CreateAccount
            operationClose={handleOperationClose}
            user={user}
            handleAccs={handleAccs}
          />
        )}
        {activeOperation === "Deposit" && (
          <Deposit
            operationClose={handleOperationClose}
            handleExecution={handleOperationExecute}
          />
        )}
        {activeOperation === "Payment" && (
          <Payment
            operationClose={handleOperationClose}
            handleExecution={handleOperationExecute}
          />
        )}
        {activeOperation === "Transfer" && (
          <Transfer
            operationClose={handleOperationClose}
            handleExecution={handleOperationExecute}
          />
        )}
      </section>
      <div className={`${!activeOperation ? "dashboard-footer" : "foot"}`}>
        <Footer />
      </div>
    </>
  );
};
