import { FC } from "react";
import { TapBar } from "@/components/TapBar";
import { GlassWrapper } from "@/components/GlassWrapper";
import { MenuNavigation } from "@/components/MenuNavigation";
import { Outlet, Route, Routes } from "react-router-dom";
import { ImageLink } from "@/components/ImageLink";

export const GameMenuPage: FC = () => {


  return (
    <div className="bg-[#191A1D] w-full h-screen flex flex-col px-5 pt-3 pb-11">
      <GlassWrapper stylesClasses="justify-between">
        <MenuNavigation>
        <Outlet/>
        </MenuNavigation>
        <TapBar />
      </GlassWrapper>
    </div>
  );
};