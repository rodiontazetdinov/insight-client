import { FC } from "react";
import ImagesStories from "./ImageStories";
import useWindowDimensions from "@/hooks/useWindowDimensions";

interface InfoPopupProps {
  onClose: () => void;
}

export const InfoPopup: FC<InfoPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div
        className="fixed top-0 left-1/2 transform -translate-x-1/2 
                bg-opacity-80 text-white rounded-lg
                "
        onClick={() => onClose()}
      >
        <ImagesStories onAllStoriesEnd={() => onClose()} />
      </div>
    </div>
  );
};
