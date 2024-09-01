import { FC, useState } from "react";
import { TopGlassSheet } from "@/components/TopGlassSheet";
import fingerPrintIcon from "../../assets/touchid-red-icon.svg";
import { Link } from "react-router-dom";
import { GlassWrapper } from "@/components/GlassWrapper";
import PageWrapper from "@/components/PageWrapper";
import { FingerPrintButton } from "@/components/FingerPrintButton"; // Импортируем новый компонент

export const WelcomePage: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSwipe = () => {
    setIsOpen(true);
  };

  return (
    <PageWrapper>
      <GlassWrapper>
        <TopGlassSheet isOpen={isOpen} />
        {isOpen ? (
          <Link to={"/main"} className="w-8 h-8 m-5 z-10">
            <img className="w-[86px] h-[63px]" src={fingerPrintIcon} />
          </Link>
        ) : (
          <FingerPrintButton onComplete={() => setIsOpen(true)} /> // Используем новый компонент
        )}
        {/* Полукруг в правом нижнем углу */}
      </GlassWrapper>
    </PageWrapper>
  );
};