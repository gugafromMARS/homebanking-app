import { FunctionComponent, ReactElement } from "react";
import { useState } from "react";

import "./CreateAccount.css";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { createAcc } from "./Requests";

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
}

interface AccountCreateDto {
  ownerName: string;
  ownerEmail: string;
  age: number;
  address: string;
  accType: string;
}

interface CreateAccProps {
  operationClose: () => void;
  user: UserDto;
  handleAccs: () => void;
}

export const CreateAccount: FunctionComponent<CreateAccProps> = ({
  operationClose,
  user,
  handleAccs,
}): ReactElement => {
  const [open, setOpen] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const onClose = () => {
    setOpen(false);
    operationClose();
  };

  async function chooseTypeOfAccount(type: string) {
    const newAcc: AccountCreateDto = {
      ownerName: user.ownerName,
      ownerEmail: user.ownerEmail,
      age: 18,
      address: "Lisbon",
      accType: type,
    };
    try {
      const newAccDto: Accounts | null = await handleCreation(newAcc);
      if (newAccDto !== null) {
        await handleAccs();
      }
      onClose();
    } catch (error: any) {
      setError(new Error(error.message || "Failed to create acc"));
      onClose();
    }
  }

  let accDto: Accounts = {
    id: 0,
    ownerName: "",
    ownerEmail: "",
    balance: 0,
    accType: "",
  };

  async function handleCreation(
    acc: AccountCreateDto
  ): Promise<Accounts | null> {
    try {
      accDto = { ...(await createAcc(acc)) };
      return accDto;
    } catch (error: any) {
      setError(new Error(error.message || "Failed to create acc"));
      return null;
    }
  }

  return (
    <Modal open={open} onClose={onClose} center>
      <section className="no-account">
        <div>
          <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input  dark:bg-black choose-acc">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
              Choose your type of account
            </h2>
            <div className="no-acc-btn">
              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-32 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
                onClick={() => chooseTypeOfAccount("Current")}
              >
                Current &rarr;
                <BottomGradient />
              </button>
              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-32 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
                onClick={() => chooseTypeOfAccount("Savings")}
              >
                Savings &rarr;
                <BottomGradient />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
