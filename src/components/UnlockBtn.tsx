import { FC } from "react";

import lockIcon from "./../../assets/lock-icon.png";

export const UnlockBtn: FC = () => {
  return (
    <div className="flex items-center justify-center unlock-icon-btn">
      <img src={lockIcon} />
    </div>
  );
};
