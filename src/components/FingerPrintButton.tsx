import { FC, useState, useEffect } from "react";
import fingerPrintIcon from "../../assets/touchid-red-icon.svg";

interface FingerPrintButtonProps {
  onComplete: () => void;
}

export const FingerPrintButton: FC<FingerPrintButtonProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPressed) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            onComplete();
            return 100;
          }
          return prev + 2; // Увеличиваем прогресс на 2 для удвоения скорости
        });
      }, 30); // Скорость заполнения полосы
    } else {
      setProgress(0);
    }
    return () => clearInterval(timer);
  }, [isPressed, onComplete]);

  return (
    <div
      className="relative w-10 h-10"
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${fingerPrintIcon})`, transform: isPressed ? 'scale(0.95)' : 'scale(1)' }}
      />
      <svg className="absolute inset-0 w-full h-full">
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          stroke="#8A4949" // Цвет полосы загрузки
          strokeWidth="3%" // Ширина полосы загрузки
          fill="none"
          strokeDasharray="282.6" // Длина окружности (2 * π * r)
          strokeDashoffset={282.6 - (282.6 * progress) / 100} // Смещение для создания эффекта заполнения
        />
      </svg>
    </div>
  );
};