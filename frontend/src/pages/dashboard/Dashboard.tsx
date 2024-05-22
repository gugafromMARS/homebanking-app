import { FunctionComponent, ReactElement } from "react";
import "./Dashboard.css";
import { operations } from "../../data";
import { OperationItem } from "../../components/OperationItem";
import Footer from "../../components/Footer";
import image from "../../assets/user.png";

export const Dashboard: FunctionComponent = (): ReactElement => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${day}-${month}-${year}`;

  return (
    <>
      <section className="dashboard">
        <div className="operations">
          <div className="user">
            <div className="user-img">
              <img src={image} alt="user" />
            </div>
            <div className="user-info">
              <p className="user-name">Olá, Admin</p>
              <p>{currentDate}</p>
              <p>Balance = {10000}€</p>
            </div>
          </div>
          {operations.map((operation) => (
            <OperationItem key={operation.id} title={operation.name} />
          ))}
        </div>
      </section>
      <Footer />
      <div className="login-block"></div>
    </>
  );
};
