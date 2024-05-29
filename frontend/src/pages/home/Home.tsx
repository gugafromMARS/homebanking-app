import { Services } from "../../components/Services";
import "./Home.css";
import { Form } from "../../components/Form";
import Footer from "../../components/Footer";
import { Slider } from "../../components/Slider";
import { FunctionComponent, ReactElement, useState } from "react";
import { createUser } from "../../components/Requests";

interface User {
  name: string;
  age: number;
  address: string;
  email: string;
  pwd: string;
}

export const Home: FunctionComponent = (): ReactElement => {
  const [error, setError] = useState<Error | null>(null);

  async function handleRegistration(user: User) {
    try {
      await createUser(user);
    } catch (error: any) {
      setError(new Error(error.message || "Failed to create User"));
    }
  }

  return (
    <main className="home">
      <Slider />
      <Services />
      <Form handleRegister={handleRegistration} />
      <Footer />
    </main>
  );
};
