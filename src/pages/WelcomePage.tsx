import { FC, useState } from "react";
import { TopGlassSheet } from "@/components/TopGlassSheet";

export const WelcomePage: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#191A1D] w-full h-screen flex flex-col px-5 pt-3 pb-11">
      <div className="glass-wrapper w-full h-full flex flex-col items-center">
        <TopGlassSheet isOpen={isOpen}/>
        <button onClick={() => setIsOpen(!isOpen)}>Open</button>
      </div>
    </div>
  );
};
