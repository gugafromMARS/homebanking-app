import { FunctionComponent, ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-multi-carousel/lib/styles.css";
import "./Card.css";

const cards: { id: number; name: string; accType: string }[] = [
  {
    id: 1324324234423,
    name: "Toni Alberto",
    accType: "current",
  },
  {
    id: 2423423423424,
    name: "Toni Alberto",
    accType: "savings",
  },
];

export const Card: FunctionComponent = (): ReactElement => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="card-container"
    >
      {cards.map(({ id, name, accType }) => (
        <SwiperSlide>
          <div className="card-info">
            <h1>SafeNet Bank</h1>
            <div className="card-user-info">
              <h1>
                <span>Name:</span> {name}
              </h1>
              <h2>
                <span>Card number:</span> {id}
              </h2>
              <h2>
                <span>Account Type:</span> {accType}
              </h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
