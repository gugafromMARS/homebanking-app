import { FunctionComponent, ReactElement } from "react";
import { cardsData } from "../data.tsx";
import { Service } from "./Service.tsx";
import "./Services.css";

export const Services: FunctionComponent = (): ReactElement => {
  return (
    <section id="services" className="services ">
      <div className="services-title">
        <h1>Services</h1>
      </div>
      <div className="service">
        {cardsData.map((card) => (
          <Service key={card.id} cardInfo={card} />
        ))}
      </div>
    </section>
  );
};
