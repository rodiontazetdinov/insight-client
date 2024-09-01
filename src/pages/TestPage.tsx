import React, { useState, useEffect } from 'react';

const TestPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('/path/to/tiger-roar.mp3'));

  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, [audio]);

  const toggleSound = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="cave-scene">
      <img 
        src="/path/to/cave-image.jpg" 
        alt="Пещера первобытных людей" 
        onClick={toggleSound}
      />
      <button onClick={toggleSound}>
        {isPlaying ? 'Остановить звук' : 'Воспроизвести звук'}
      </button>
    </div>
  );
};

export default TestPage;