import ImageSlider from "../../components/ImageSlider";
import { Services } from "../../components/Services";
import "./Home.css";
import { Form } from "../../components/Form";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main className="home">
      <div className="home-title">
        <h1>SafeNetBank</h1>
      </div>
      <div className="slider">
        <ImageSlider />
      </div>
      <section className="services">
        <Services />
      </section>

      <section className="form">
        <h1>Sign up</h1>
        <Form />
      </section>

      <Footer />
    </main>
  );
}
