"use client";
import React, {
  FunctionComponent,
  ReactElement,
  useRef,
  useState,
} from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "../utils/cn";
import "./Form.css";

interface User {
  name: string;
  age: number;
  address: string;
  email: string;
  pwd: string;
}

interface FormProps {
  handleRegister: (user: User) => void;
}

export const Form: FunctionComponent<FormProps> = ({
  handleRegister,
}): ReactElement => {
  const [isPassCorrect, setIsPassCorrect] = useState<boolean | null>(null);

  const name = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const pass = useRef<HTMLInputElement>(null);
  const retryPass = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (pass.current.value !== retryPass.current.value) {
      setIsPassCorrect(false);
      return;
    }
    const newUser: User = {
      name: name.current.value,
      age: age.current.value,
      address: address.current.value,
      email: email.current.value,
      pwd: pass.current.value,
    };
    setIsPassCorrect(true);

    handleRegister(newUser);
  };

  return (
    <section className="form">
      <div className="form-title mb-5">
        <h1>Sign up</h1>
      </div>
      <div className=" max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        {isPassCorrect == false && (
          <h2 className="text-red-500 text-center">Credentials are wrong</h2>
        )}
        {isPassCorrect && (
          <h2 className="text-green-500 text-center">
            User created successfully
          </h2>
        )}
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to SafeNetBank
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Register into SafeNetBank if you want to create your account.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer className="mb-4">
              <Label htmlFor="fullname">Full name</Label>
              <Input
                ref={name}
                id="fullname"
                placeholder="Tyler White"
                type="text"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="age">Age</Label>
            <Input ref={age} id="age" type="number" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="address">Address</Label>
            <Input
              ref={address}
              id="address"
              placeholder="Av. White Street"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              ref={email}
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label
              className={`${isPassCorrect === false ? "text-red-500" : ""}`}
              htmlFor="password"
            >
              Password
            </Label>
            <Input
              className={`${
                isPassCorrect === false
                  ? "bg-red-200"
                  : isPassCorrect === true
                  ? "bg-green-200"
                  : ""
              }`}
              ref={pass}
              id="password"
              placeholder="••••••••"
              type="password"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label
              className={`${isPassCorrect === false ? "text-red-500" : ""}`}
              htmlFor="twitterpassword"
            >
              Re-type password
            </Label>
            <Input
              className={`${
                isPassCorrect === false
                  ? "bg-red-200"
                  : isPassCorrect === true
                  ? "bg-green-200"
                  : ""
              }`}
              ref={retryPass}
              id="retryPassword"
              placeholder="••••••••"
              type="password"
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </section>
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
