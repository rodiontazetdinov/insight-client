import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import startStory1 from './../../assets/firststory/111.png';
import startStory2 from './../../assets/firststory/222.png';
import { GlassWrapper } from '@/components/GlassWrapper';
import PageWrapper from '@/components/PageWrapper';
const stories = [
  { id: 1, image: startStory1 },
  { id: 2, image: startStory2 },
];

const StoriesPage: React.FC = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStory < stories.length - 1) {
        setCurrentStory(currentStory + 1);
      } else {
        // Редирект на /main после завершения всех сторис
        navigate('/main');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentStory, navigate]);

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
