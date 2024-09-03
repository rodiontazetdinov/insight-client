import { FC, useState } from "react";
import { TapBar } from "@/components/TapBar";
import { TopBar } from "@/components/TopBar";
import { GlassWrapper } from "@/components/GlassWrapper";
import { useHapticFeedback } from '@telegram-apps/sdk-react';

import centralButtonImage from "../../assets/firststory/mainbutton.png";
import lockerImage from "../../assets/firststory/robot.png";
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
      <GlassWrapper stylesClasses="justify-between relative">
        <TopBar />
        <p className="text-[23px] font-normal line-through text-[#AF968A] font-bebas-neue text-center leading-[0px] tracking-[4px] capitalize">Absolutly Nothing</p>
        <p className="text-[39px] font-normal text-[#AF968A] font-bebas-neue text-center leading-[0px] tracking-[4px] capitalize">Something More</p>
        <img className="self-end mr-8" src={lockerImage}/>
        <div className="relative w-[153px] h-[153px] z-10">
          <div 
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #E9EAF0 0%, #E9EAF0 100%)',
              boxShadow: 'inset -80px -70px 50px 0px #F1E8E6, inset 80px 70px 50px 0px #BFAFA7',
              filter: 'blur(16.85px)',
            }}
          />
          <button 
            className={`relative z-10 w-full h-full rounded-full overflow-hidden ${isPressed ? "scale-95" : ""}`}
            style={{
              transition: 'all 0.2s ease-in-out'
            }}
            onMouseDown={handleMouseDown} 
            onMouseUp={handleMouseUp} 
            onTouchStart={handleMouseDown} 
            onTouchEnd={handleMouseUp}
            onClick={() => haptickFeedback.impactOccurred('medium')}
          >
            <span 
              className="absolute inset-0 bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: `url(${centralButtonImage})` }}
            />
          </button>
        </div>
        <TapBar />
      </GlassWrapper>
    </PageWrapper>
  );
};