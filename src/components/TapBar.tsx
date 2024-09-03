import { FC } from "react";
import { Link } from "react-router-dom";

import meTapbarIcon from "../../assets/firststory/meicon.svg";
import insightTapbarIcon from "../../assets/firststory/touchicon.svg";
import menuTapbarIcon from "../../assets/firststory/menuicon.svg";

export const TapBar: FC = () => (
  <div className="w-full px-7 py-2 flex justify-between z-10 rounded-[40px] border border-white/38 bg-white/60 backdrop-blur-[12.9px]">
    <Link to="/menu/tasks" className="w-8 h-8 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${meTapbarIcon})` }} />
    <Link to="/main" className="w-8 h-8  bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${insightTapbarIcon})` }} />
    <Link to="/profile" className="w-8 h-8  bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${menuTapbarIcon})` }} />
  </div>
);
