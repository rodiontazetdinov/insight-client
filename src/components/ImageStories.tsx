import React from 'react';
import Stories from 'stories-react';
import 'stories-react/dist/index.css';

import cityImage from './../../assets/photo_2024-08-07_21-55-26.jpg';
import girlImage from './../../assets/photo_2024-08-07_23-11-37.jpg';
import armImage from './../../assets/2783579ee9d596d2dd20c8df706a2336.jpg'
import useWindowDimensions from '@/hooks/useWindowDimensions';

interface ImageStoriesProps {
    onAllStoriesEnd: () => void;
}

export default function ImagesStories({
    onAllStoriesEnd} : ImageStoriesProps) {
    const { height, width } = useWindowDimensions();
  const stories = [
    {
      type: 'image',
      url: cityImage,
      duration: 5000,
    },
    {
      type: 'image',
      duration: 5000,
      url: girlImage,
    },
    {
      duration: 5000,
      type: 'image',
      url: armImage,
    },
  ];

  return <Stories width={width} height={height} stories={stories} onAllStoriesEnd={onAllStoriesEnd}/>;
}