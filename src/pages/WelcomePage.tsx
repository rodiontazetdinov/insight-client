import { FC, useState } from "react";
import { TopGlassSheet } from "@/components/TopGlassSheet";
import fingerPrintIcon from "../../assets/touchid-icon.png";
import { UnlockBtn } from "@/components/UnlockBtn";
import { Link } from "react-router-dom";
import { GlassWrapper } from "@/components/GlassWrapper";
import SwipeableCheckbox from "@/components/SwipeableCheckbox";

export const WelcomePage: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#191A1D] w-full h-screen flex flex-col px-5 pt-3 pb-11">
      <GlassWrapper>
        <TopGlassSheet isOpen={isOpen} />
        {isOpen && (
          <Link to={"/main"} className="w-8 h-8 m-5 z-10">
            <img className="w-8 h-8" src={fingerPrintIcon} />
          </Link>
        )}
        {!isOpen && (
          <button
            className="w-8 h-8 m-5 unlock-btn z-10"
            onClick={() => setIsOpen(true)}
          >
            <p className="text-lg">Unlock</p>
            <UnlockBtn />
          </button>
        )}
        {/* Полукруг в правом нижнем углу */}
      </GlassWrapper>
    </div>
  );
};