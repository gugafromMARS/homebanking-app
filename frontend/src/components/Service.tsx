import { FunctionComponent, ReactElement } from "react";
import "./Service.css";

interface ServiceProps {
  cardInfo: {
    id: number;

    title: string;
    description: string;
    btn: string;
  };
}

export const Service: FunctionComponent<ServiceProps> = ({
  cardInfo,
}): ReactElement => {
  const { id, title, description, btn } = cardInfo;

  return (
    <div className={`card ${id == 1 ? "img1" : "img2"}`}>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-body">{description}</p>
        <a href="#" className="button">
          {btn}
        </a>
      </div>
    </div>
  );
};

export default Service;
