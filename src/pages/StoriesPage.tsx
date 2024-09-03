import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import startStory1 from './../../assets/firststory/111.png';
import startStory2 from './../../assets/firststory/222.png';
import loader from './../../assets/firststory/gears-spinner.svg';
import { GlassWrapper } from '@/components/GlassWrapper';
import PageWrapper from '@/components/PageWrapper';
const stories = [
  { id: 1, image: startStory1 },
  { id: 2, image: startStory2 },
];

const StoriesPage: React.FC = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const navigate = useNavigate();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = stories.map((story) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = story.image;
          img.onload = resolve;
        });
      });
      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };
    loadImages();
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    timerRef.current = setTimeout(() => {
      if (currentStory < stories.length - 1) {
        setCurrentStory(currentStory + 1);
      } else {
        navigate('/main');
      }
    }, 4000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentStory, navigate, imagesLoaded]);

  if (!imagesLoaded) {
    return (
      <div className='h-screen w-screen flex items-center justify-center bg-black'>
        <img src={loader} alt="Loading" className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <PageWrapper>
      <GlassWrapper stylesClasses="h-full w-full flex flex-col">
        <div className="relative flex-grow flex items-center justify-center overflow-hidden">
          <img
            src={stories[currentStory].image}
            alt={`Story ${currentStory + 1}`}
            className="w-full h-full object-contain"
          />
          <div className="absolute top-0 left-0 right-0 flex justify-between p-2">
            {stories.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 mx-1 ${
                  index <= currentStory ? 'bg-white' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </GlassWrapper>
    </PageWrapper>
  );
};

export default StoriesPage;
