import { useState, type FC } from "react";

import { shuffleArray } from "@/utils/helpers";
import { semiFinalists, realFinalists } from "@/utils/constants";
import { Team } from "@/components/Team";
import { FilterButtons } from "@/components/FilterButtons";
import { TonConnectButton, useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";

import shuffleIcon from "./../../../assets/shuffle-icon.png";
import infoIcon from "./../../../assets/info-icon.png"
import { InfoPopup } from "@/components/InfoPopup";
import { useTonConnect } from "../../hooks/useTonConnect";
import { useBettingContract } from "@/hooks/useBettingContract";


export const BetsPage: FC = () => {
  const [shuffledArray, setShuffledArray] = useState(() => shuffleArray(realFinalists));
  const [isInfoPopupVisible, setIsInfoPopupVisible] = useState(true);

  const shuffle = () => {
    setShuffledArray(()=> shuffleArray([...realFinalists]));
    getBetsCounter();
  };

  const filterAndShuffle = (filterBy: string) => {
    const filteredArray = realFinalists.filter((team) => team.place === filterBy);
    setShuffledArray(() => shuffleArray([...filteredArray]));
  }

  const { connected } = useTonConnect();
  const { getBetsCounter } = useBettingContract();

  return (
    <>
    <div className="bg-gray-100 w-full h-screen flex flex-col">
      <div className="flex flex-row m-4 justify-between">
        <button onClick={() => setIsInfoPopupVisible(!isInfoPopupVisible)}><img className="w-8 h-8" src={infoIcon} /></button>
        <TonConnectButton />
      </div>
      
      <h1 className="text-2xl font-bold text-gray-900 p-4">Финалисты:</h1>
      
      <FilterButtons onFilter={filterAndShuffle}/>
      <button
        className="p-4 text-[18px] font-bold text-gray-900 flex items-center gap-2 flex justify-end"
        onClick={shuffle}
      >
        Перемешать <img className="w-8 h-8" src={shuffleIcon} />
      </button>
      <ul>
        {shuffledArray.map((team) => (
          <li key={team.teamLink}>
            <Team teamName={team.teamName} teamLink={team.teamLink} teamMVP={team.teamMVP} teamTrack={team.teamTrack} place={team.place}/>
          </li>
        ))}
      </ul>
    </div>
    {isInfoPopupVisible && <InfoPopup onClose={() => setIsInfoPopupVisible(false)}/>}
    </>
  );
};
