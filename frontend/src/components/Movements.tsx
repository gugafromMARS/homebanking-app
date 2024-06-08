import { FunctionComponent, ReactElement } from "react";
import "./Movements.css";
import { Movement } from "./Movement";
import { MovesDto } from "../pages/dashboard/Dashboard";

interface MovementsProps {
  movements: MovesDto[];
}

export const Movements: FunctionComponent<MovementsProps> = ({
  movements,
}): ReactElement => {
  return (
    <div className="moviments px-32">
      {movements.length > 0 ? (
        movements.map(({ type, amount, date }, index) => {
          return (
            <Movement
              key={index}
              type={type}
              amount={amount}
              date={date}
              color={
                type == "DEPOSIT" || type == "RECEIPT"
                  ? "text-green-500"
                  : "text-red-500"
              }
            />
          );
        })
      ) : (
        <p className="text-red-500">No movements available</p>
      )}
    </div>
  );
};
