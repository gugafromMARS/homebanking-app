import { FunctionComponent, ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-multi-carousel/lib/styles.css";
import "./Card.css";

interface Accounts {
  id: number;
  ownerName: string;
  ownerEmail: string;
  balance: number;
  accType: string;
}

interface CardProps {
  accounts: Accounts[];
  handleActiveAcc: (acc: Accounts) => void;
}

export const Card: FunctionComponent<CardProps> = ({
  accounts,
  handleActiveAcc,
}): ReactElement => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className=" swiperr"
    >
      {accounts.map((account) => (
        <SwiperSlide
          key={account.id}
          className="swiper-sliderr tranding-slide card-bg"
          onChange={() => handleActiveAcc(account)}
        >
          <div className="card-swiper">
            <h1>SafeNet Bank</h1>
            <div className="card-user-info">
              <h2>
                <span>Name:</span> {account.ownerName}
              </h2>
              <h2>
                <span>Card number:</span> {account.id}
              </h2>
              <h2>
                <span>Account Type:</span> {account.accType}
              </h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
