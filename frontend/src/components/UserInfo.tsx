import {
  ChangeEvent,
  ChangeEventHandler,
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import "./UserInfo.css";
import image from "../assets/user.png";
import { OperationType } from "../pages/dashboard/Dashboard";
import { getCoords, updateUserPhoto, UserUpdatePhoto } from "./Requests";

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

  async function handlePhotoUpdate(event: ChangeEvent<HTMLInputElement>): void {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      console.log(formData);

      const newImage: UserUpdatePhoto = {
        ownerEmail: user.ownerEmail,
        photo: formData,
      };
      try {
        const userUpdated = await updateUserPhoto(newImage); // Corrigindo a chamada de função
        console.log(userUpdated); // Apenas para depuração, faça o que for necessário com a resposta
      } catch (error: any) {
        setError(new Error(error.message || "Failed to update user image"));
      }
    }
  }

  return (
    <div onClick={() => handleOperationClick(null)} className={`user `}>
      <div className="user-info">
        <div className="user-image">
          <img src={image} alt="" />

          <input
            onChange={handlePhotoUpdate}
            className="bg-gradient-to-br relative  from-black dark:from-zinc-900 dark:to-zinc-900 text-sm to-neutral-600 block dark:bg-zinc-800 w-52 text-white rounded-md h-15 font-medium ml-5 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="file"
          />
          <BottomGradient />
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
        </div>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
