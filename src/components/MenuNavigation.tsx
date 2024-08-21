import { FC } from "react";
import { TapBar } from "@/components/TapBar";
import { GlassWrapper } from "@/components/GlassWrapper";
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import { ImageLink } from "./ImageLink";

interface MenuNavigationProps {
    children: React.ReactNode
}
export const MenuNavigation: FC<MenuNavigationProps> = ({children}) => {
  return (
    <div className="w-full h-screen flex flex-col px-5 pt-3 pb-11 justify-center space-y-5">
      <nav className="flex flex-row items-center justify-between mx-7">
        <NavLink className="menu-navlink opacity-25" to="/menu/tasks">
          Tasks
        </NavLink>
        <NavLink className="menu-navlink opacity-25" to="/menu/community">
          Community
        </NavLink>
        <NavLink className="menu-navlink opacity-25" to="/menu/gameworld">
          Game World
        </NavLink>
        <NavLink className="menu-navlink opacity-25" to="/menu/events">
          Event
        </NavLink>
      </nav>
      {children}
    </div>
  );
};
