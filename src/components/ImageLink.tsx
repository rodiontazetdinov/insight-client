import { FC } from "react";
import { TapBar } from "@/components/TapBar";
import { GlassWrapper } from "@/components/GlassWrapper";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

import taskLinkImage from "./../../assets/tasks-square.png";
import communityLinkImage from "./../../assets/community-square.png";
import gameworldLinkImage from "./../../assets/gameworld-square.png";
import eventsLinkImage from "./../../assets/events-square.jpg";

export const ImageLink: FC = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/menu/tasks" && (
        <Link to={"/tasks"} className="menu-imagelink p-6"><img src={taskLinkImage}/></Link>
      )}
      {location.pathname === "/menu/community" && (
        <Link to={"/community"} className="menu-imagelink p-6"><img src={communityLinkImage}/></Link>
      )}
      {location.pathname === "/menu/gameworld" && (
        <Link to={"/gameworld"} className="menu-imagelink p-6"><img src={gameworldLinkImage}/></Link>
      )}
      {location.pathname === "/menu/events" && (
        <Link to={"/events"} className="menu-imagelink p-6"><img src={eventsLinkImage}/></Link>
      )}
      </>
  );
};
