import { FC } from "react";
import { TapBar } from "@/components/TapBar";
import { GlassWrapper } from "@/components/GlassWrapper";

import cardImage from "../../assets/cards.png";
import coinImage from "../../assets/coin.png";

export const ProfilePage: FC = () => {


  return (
    <div className="bg-[#191A1D] w-full h-screen flex flex-col px-5 pt-3 pb-11">
      <GlassWrapper stylesClasses="justify-between">
        <div className="flex flex-col items-center justify-center h-full space-y-5">
            <p className="text-[23px] text-[#E58A00]">
                1000 000 IC
            </p>
            {/* <img src={cardImage}/> */}
            <img src={coinImage}/>
        </div>
        <TapBar />
      </GlassWrapper>
    </div>
  );
};