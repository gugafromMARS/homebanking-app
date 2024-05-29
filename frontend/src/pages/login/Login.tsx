import { FunctionComponent, ReactElement } from "react";
import { LoginInput } from "../../components/LoginInput";
import "./Login.css";
import Footer from "../../components/Footer";

interface UserLogin {
  email: string;
  pwd: string;
}

interface LoginProps {
  handleLogin: (user: UserLogin) => void;
}

export const Login: FunctionComponent<LoginProps> = ({
  handleLogin,
}): ReactElement => {
  return (
    <section className="login">
      <div className="login-area">
        <LoginInput handleLogin={handleLogin} />
      </div>
      <div className="footer-login">
        <Footer />
      </div>
    </section>
  );
};
