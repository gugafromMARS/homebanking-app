import { FunctionComponent, ReactElement } from "react";
import "./UserInfo.css";
import image from "../assets/user.png";
import { OperationType } from "../pages/dashboard/Dashboard";

interface UserDto {
  ownerName: string;
  ownerEmail: string;
}

interface OperationProps {
  handleOperationClick: (operation: OperationType) => void;
  user: UserDto;
}

export const UserInfo: FunctionComponent<OperationProps> = ({
  handleOperationClick,
  user,
}): ReactElement => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${day}-${month}-${year}`;

  return (
    <div onClick={() => handleOperationClick(null)} className={`user `}>
      <div className="user-info">
        <div className="user-image">
          <img src={image} alt="" />
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
