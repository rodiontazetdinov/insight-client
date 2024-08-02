import { type FC } from "react";

import { useTonConnect } from "../../hooks/useTonConnect";

import logo from "./../../../assets/Logo17.png";

export const MainPage: FC = () => {
  const { connected } = useTonConnect();

  return (
    <div className="bg-[#35393e] h-screen flex items-center justify-center animate-pulse">
      <img src={logo}/>
    </div>
  );
};
