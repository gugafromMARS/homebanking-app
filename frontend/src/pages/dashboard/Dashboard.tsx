import { FunctionComponent, ReactElement } from "react";
import "./Dashboard.css";
import { operations } from "../../data";
import { OperationItem } from "../../components/OperationItem";
import Footer from "../../components/Footer";
import image from "../../assets/user.png";
import CIcon from "@coreui/icons-react";

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
              <img src={image} alt="" />
            </div>
            <div className="user-info">
              <p>Olá, Admin</p>
              <p>{currentDate}</p>
              <p>Balance = 10000 $</p>
            </div>
          </div>
          {operations.map(({ id, name, icon }, index) => {
            return (
              <div
                key={index}
                className={`operation ${id} ${
                  name == "Deposit" || name == "Movements" ? "end" : ""
                } row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 text-center`}
              >
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                  {name}
                </div>
                <CIcon icon={icon} size="sm" />
              </div>
            );
          })}
        </div>
      </section>
      {/* <Footer /> */}
      <div className="login-block"></div>
    </>
  );
};
