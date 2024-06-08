import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import "./UserInfo.css";
import image from "../assets/user.png";
import { OperationType } from "../pages/dashboard/Dashboard";
import { getCoords } from "./Requests";

interface UserDto {
  ownerName: string;
  ownerEmail: string;
}

export interface UserLocation {
  temp: number;
  icon: string;
  city: string;
}

interface OperationProps {
  handleOperationClick: (operation: OperationType) => void;
  user: UserDto;
}

export const UserInfo: FunctionComponent<OperationProps> = ({
  handleOperationClick,
  user,
}): ReactElement => {
  const [error, setError] = useState<Error | null>(null);
  const [location, setLocation] = useState<UserLocation | null>(null);

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${day}-${month}-${year}`;

  useEffect(() => {
    handleLocation();
  }, []);

  async function handleLocation() {
    try {
      const localization = await getCoords(user.ownerAddress);
      if (localization !== null) {
        const userLocation = {
          temp: (localization.main.temp - 273.15).toFixed(1),
          icon: `https://openweathermap.org/img/wn/${localization.weather[0].icon}.png`,
          city: user.ownerAddress,
        };
        setLocation(userLocation);
      }
    } catch (error: any) {
      setError(new Error(error.message || "Failed to get localization"));
    }
  }

  return (
    <div onClick={() => handleOperationClick(null)} className={`user `}>
      <div className="user-info">
        <div className="user-image">
          <img src={image} alt="" />
        </div>
        <div className="location">
          {location && (
            <p className="item2">
              <span>{location.temp}</span>°C
            </p>
          )}
          {location && (
            <img id="location-img" className="item1" src={location.icon} />
          )}
          {location && <p className="item3">{location.city}</p>}
        </div>
        <div className="information">
          <div className="info">
            <p>
              <span className="date">{currentDate}</span>
            </p>
            <p>
              Olá, <span>{user.ownerName}</span>
            </p>
          </div>
          {/*!haveAcc && (
          <NoAccount handleOperationClick={handleOperationClick} user={user} />
        )*/}
        </div>
      </div>
    </div>
  );
};
