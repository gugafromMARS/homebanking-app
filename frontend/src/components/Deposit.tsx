import { FunctionComponent, ReactElement } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "../utils/cn";
import "./Deposit.css";
import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

interface DepositProps {
  operationClose: () => void;
}

export const Deposit: FunctionComponent<DepositProps> = (
  operationClose
): ReactElement => {
  const [open, setOpen] = useState(true);

  const onCloseModal = () => {
    setOpen(false);
    operationClose;
  };

  const handleDeposit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Deposited");
  };

  return (
    <Modal open={open} onClose={onCloseModal} center>
      <div className="deposit-input pt-36">
        <div className=" max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Deposit
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Choose the receiver account and the amount.
          </p>

          <form className="my-8" onSubmit={handleDeposit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer className="mb-4">
                <Label htmlFor="ibanNumber">IBAN Number</Label>
                <Input
                  id="iban"
                  placeholder="PT50 xxxx xxxx xxxx xxxx xxxx x"
                  type="text"
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="address">Receiver Name</Label>
              <Input id="receiver" placeholder="John White" type="text" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" placeholder="10€" type="text" />
            </LabelInputContainer>
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Deposit &rarr;
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
        </div>
      </div>
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

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
