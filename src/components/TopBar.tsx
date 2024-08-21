import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import backButtonIcon from "./../../assets/back-icon44.png";

import gearIcon from "./../../assets/gear-icon3.png";

export const TopBar: FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex flex-row justify-between m-5 w-full">
      {/* <button
        className="navigation-button flex items-center justify-center ml-1"
        onClick={() => navigate(-1)}
      >
        <img className="flex " src={backButtonIcon} />
      </button>
      <button
        className="navigation-button flex items-center justify-center"
        onClick={() => navigate("/settings")}
      >
        <img className="w-[62px] h-[62px]" src={backButtonIcon} />
      </button> */}
    </div>
  );
};
