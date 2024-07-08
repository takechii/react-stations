// DogImage.js
import React from 'react';

/**
 * @param {{ imageUrl: string }} props
 * @returns {JSX.Element}
 */
export const DogImage = ({ imageUrl }) => {
  return (
    <img src={imageUrl} alt="犬の画像" />
  );
}
