import { FC } from "react";
import { TapBar } from "@/components/TapBar";
import { GlassWrapper } from "@/components/GlassWrapper";

import eventsImage from "../../assets/events.png"

export const EventsPage: FC = () => {


  return (
    <div className="bg-[#191A1D] w-full h-screen flex flex-col px-5 pt-3 pb-11">
      <GlassWrapper stylesClasses="justify-between">
        <div className="flex flex-col items-center justify-center h-full space-y-5">
            <p className="text-[54px] text-[#ededed] opacity-25">
                Events
            </p>
            <img src={eventsImage}/>
        </div>
        <TapBar />
      </GlassWrapper>
    </div>
  );
};