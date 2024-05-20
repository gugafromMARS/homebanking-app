import ImageSlider from "../../components/ImageSlider";
import Services from "../../components/Services";
import "./Home.css";
export default function Home() {
  return (
    <main className="home">
      <div className="slider">
        <ImageSlider />
        <Services />
      </div>
    </main>
  );
}
