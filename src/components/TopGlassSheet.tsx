import { FC, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

import vrmanImage from "./../../assets/vr-man.png";

interface TopGlassSheetProps {
    isOpen: boolean
}
export const TopGlassSheet: FC<TopGlassSheetProps> = ({isOpen}) => {
  

  // Анимация с учетом начального и конечного положений
  const styles = useSpring({
    from: { transform: "translateX(-50%) translateY(-100%)" }, // Начальное состояние
    to: {
      transform: isOpen
        ? "translateX(-50%) translateY(0)"
        : "translateX(-50%) translateY(-100%)",
    }, // Конечные состояния
    config: { tension: 50, friction: 30 }, // Ваши параметры для анимации
  });

  // const imgStyles = useSpring({
  //   loop: true,
  //   to: async (next) => {
  //     while (1) {
  //       await next({
  //         transform: "translateY(-5px) translateX(5px)",
  //         rotate: "-1deg",
  //         config: { tension: 500, friction: 0 },
  //       });
  //       await next({
  //         transform: "translateY(5px) translateX(-5px)",
  //         rotate: "1deg",
  //         config: { tension: 500, friction: 0 },
  //       });
  //     }
  //   },
  // });

  return (
    <div className="container">
      {/* <button onClick={() => setIsOpen(!isOpen)}>Toggle Top Sheet</button> */}
      <animated.div style={styles} className={`glass-top-sheet ${isOpen ? "glass-top-sheet_open" : ""}`}>
        <animated.img src={vrmanImage} />
      </animated.div>
      {/* <div className="blur"></div> */}
    </div>
  );
};
