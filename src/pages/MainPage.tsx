import { FC, useState } from "react";
import { TapBar } from "@/components/TapBar";
import { TopBar } from "@/components/TopBar";
import { GlassWrapper } from "@/components/GlassWrapper";
import { useHapticFeedback } from '@telegram-apps/sdk-react';

import centralButtonImage from "../../assets/central-btn.png";
import PageWrapper from "@/components/PageWrapper";

export const MainPage: FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPressed, setIsPressed] = useState(false);

  const haptickFeedback = useHapticFeedback();

 

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <PageWrapper>
      <GlassWrapper stylesClasses="justify-between">
        <TopBar />
        <p className="text-[23px] font-thin line-through text-[#3E4146]">Absolutly Nothing</p>
        <p className="text-[23px] font-bold text-[#3E4146]">Something More</p>
        <p></p>
        <button 
          className={`z-10 ${isPressed ? "pressed" : ""}`} 
          onMouseDown={handleMouseDown} 
          onMouseUp={handleMouseUp} 
          onTouchStart={handleMouseDown} 
          onTouchEnd={handleMouseUp}
          onClick={() => haptickFeedback.impactOccurred('medium')}
        >
          <img src={centralButtonImage} />
        </button>
        <TapBar />
      </GlassWrapper>
    </PageWrapper>
  );
};