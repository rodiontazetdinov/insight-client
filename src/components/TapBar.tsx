import { FC } from "react";
import { Link } from "react-router-dom";

import leftTapbarIcon from "../../assets/tapbar-left-icon.png";
import rightTapbarIcon from "../../assets/tapbar-right-icon.png";
import centralTapbarIcon from "../../assets/tapbar-central-icon.png";

export const TapBar: FC = () => (
  <div className="glass-wrapper w-full px-7 py-5 flex justify-between z-10">
    <Link to="/tasks">
      <img className="w-12 h-12" src={leftTapbarIcon} />
    </Link>
    <Link to="/main">
      <img className="w-12 h-12" src={centralTapbarIcon} />
    </Link>
    <Link to="/tasks">
      <img className="w-12 h-12" src={rightTapbarIcon} />
    </Link>
  </div>
);
