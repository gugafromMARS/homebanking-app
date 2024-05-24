import { Services } from "../../components/Services";
import "./Home.css";
import { Form } from "../../components/Form";
import Footer from "../../components/Footer";
import { Slider } from "../../components/Slider";

export default function Home() {
  return (
    <main>
      <Slider />
      <Services />
      <Form />
      <Footer />
    </main>
  );
}
