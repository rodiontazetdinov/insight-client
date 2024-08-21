import { FC } from "react";
import { Link } from "react-router-dom";

import planetTapbarIcon from "../../assets/planet-icon.svg";
import insightTapbarIcon from "../../assets/insight-icon.svg";
import personTapbarIcon from "../../assets/person-icon.svg";

export const TapBar: FC = () => (
  <div className="glass-wrapper w-full px-7 py-5 flex justify-between z-10">
    <Link to="/menu/tasks">
      <img className="w-12 h-12 opacity-25" src={planetTapbarIcon} />
    </Link>
    <Link to="/main">
      <img className="w-12 h-12 opacity-25" src={insightTapbarIcon} />
    </Link>
    <Link to="/profile">
      <img className="w-12 h-12 opacity-25" src={personTapbarIcon} />
    </Link>
  </div>
);
