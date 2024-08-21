import { FC } from "react";
import { TapBar } from "@/components/TapBar";
import { GlassWrapper } from "@/components/GlassWrapper";

import gameworldImage from "../../assets/gameworld.png"

export const GameworldPage: FC = () => {


  return (
    <div className="bg-[#191A1D] w-full h-screen flex flex-col px-5 pt-3 pb-11">
      <GlassWrapper stylesClasses="justify-between">
        <div className="flex flex-col items-center justify-center h-full space-y-5">
            <p className="text-[54px] text-[#ededed] opacity-25">
                Game world
            </p>
            <img src={gameworldImage}/>
        </div>
        <TapBar />
      </GlassWrapper>
    </div>
  );
};