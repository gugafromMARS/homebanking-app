import { FunctionComponent, ReactElement } from "react";
import "./Moviments.css";
import { Moviment } from "./Moviment";
import { moves } from "../data";

export const Moviments: FunctionComponent = (): ReactElement => {
  return (
    <div className="moviments px-32">
      {moves.map(({ type, amount, date, color, symbol }, index) => {
        return (
          <Moviment
            key={index}
            type={type}
            amount={amount}
            date={date}
            color={color}
            symbol={symbol}
          />
        );
      })}
    </div>
  );
};
