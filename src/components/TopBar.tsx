import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import backButtonIcon from "./../../assets/back-icon3.png";

import gearIcon from "./../../assets/gear-icon3.png";

export const TopBar: FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex flex-row justify-between m-5 w-full">
      {/* <button
        className="navigation-button flex items-center justify-center"
        onClick={() => navigate(-1)}
      >
        <img src={backButtonIcon} />
      </button>
      <button
        className="navigation-button flex items-center justify-center"
        onClick={() => navigate("/settings")}
      >
        <img src={gearIcon} />
      </button> */}
    </div>
  );
};
