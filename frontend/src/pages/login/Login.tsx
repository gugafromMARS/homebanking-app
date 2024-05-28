import { FunctionComponent, ReactElement } from "react";
import { LoginInput } from "../../components/LoginInput";
import "./Login.css";
import Footer from "../../components/Footer";

export const Login: FunctionComponent = (): ReactElement => {
  return (
    <section className="login">
      <div className="login-area">
        <LoginInput />
      </div>
      <div className="footer-login">
        <Footer />
      </div>
    </section>
  );
};
