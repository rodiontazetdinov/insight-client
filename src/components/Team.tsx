import { useEffect, useState, type FC } from "react";
import cls from 'classnames';

import rocketIcon from "../../assets/rocket.png";
import { useTonConnect } from "@/hooks/useTonConnect";
// import { useBettingContract } from "@/hooks/useBettingContract";

interface TeamProps {
  text: string;
  owner: string;
  chat: string;
  teamTrack: string;
  price: string;
}

export const Team: FC<TeamProps> = ({
  text,
  owner,
  chat,
  teamTrack,
  price,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { connected } = useTonConnect();
  // const { sendNewBet } = useBettingContract();

  const handleBackground = (teamTrack: string) => {
    if (teamTrack?.includes("Bot")) {
      return "bg-sky-500";
    }
    if (teamTrack?.includes("Frontend")) {
      return "bg-rose-500";
    }
    if (teamTrack?.includes("Blockchain")) {
      return "bg-yellow-300";
    }
    if (teamTrack?.includes("Design")) {
      return "bg-green-400";
    }
    if (teamTrack?.includes("Backend")) {
      return "bg-gray-900";
    }
  };

  return (
    <li
      className={`${
        isOpen ? "bg-gray-300" : "bg-gray-100"
      } w-full flex flex-col border-gray-200 border p-4`}
      onClick={() => !isOpen && setIsOpen(!isOpen)}
    >
      <p className="text-[18px] font-bold text-gray-900 p-2 truncate">
        {text}
      </p>
      {isOpen && (
        <>
          <p className="text-[18px] font-bold text-gray-900 p-2 truncate">Куратор</p>

          <a
            className="text-[18px] font-bold  p-2 text-blue-500 truncate"
            href={owner}
            target="_blank"
          >
            {owner}
          </a>
          <p className="text-[18px] font-bold text-gray-900 p-2 truncate">Референс</p>
          <a
            className="text-[18px] font-bold text-blue-500 p-2 truncate"
            href={chat}
            target="_blank"
          >
            {chat}
          </a>
          <p
            className={`text-[18px] font-bold ${handleBackground(
              teamTrack
            )} text-white p-2`}
            text-white
          >
            {price}
          </p>
          {/* <button
            className={cls({
              "flex items-center justify-center gap-2": true,
              "text-[18px] font-bold text-white": !connected,
              
              "border border-white rounded-full": !connected,
              "border border-sky-500 rounded-full": connected,
              "text-[18px] font-bold text-sky-500": connected,
              "p-2 mt-2": true,
            })}
            disabled={!connected}
            onClick={() => sendNewBet(text, 0n, owner)}
          >
            Ты победишь <img className="w-8 h-8" src={rocketIcon} />
            (1 TON)
          </button> */}
        </>
      )}
    </li>
  );
};
