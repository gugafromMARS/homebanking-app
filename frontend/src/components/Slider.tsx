import { FunctionComponent, ReactElement } from "react";
import ImageSlider from "./ImageSlider";
import "./Slider.css";

export const Slider: FunctionComponent = (): ReactElement => {
  return (
    <section className="home-slider">
      <div className="home-title">
        <h1>SafeNetBank</h1>
      </div>
      <div className="slider">
        <ImageSlider />
      </div>
    </section>
  );
};
