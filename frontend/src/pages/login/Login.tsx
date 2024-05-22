import { FunctionComponent, ReactElement } from "react";
import { LoginInput } from "../../components/LoginInput";
import "./Login.css";
import Footer from "../../components/Footer";

export const Login: FunctionComponent = (): ReactElement => {
  return (
    <>
      <div className="login-area">
        <section className="login">
          <LoginInput />
        </section>
        <div className="footer">
          <Footer />
        </div>
      </div>
      <div className="login-block"></div>
    </>
  );
};
