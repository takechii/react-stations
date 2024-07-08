// Description.jsx
import React from 'react';
import { DogImage } from './DogImage';

/**
 * @param {{ dogUrl: string, fetchRandomDogUrl: () => void }} props
 * @returns {JSX.Element}
 */
export const Description = ({ dogUrl, fetchRandomDogUrl }) => {
  return (
    <main>
      <p>犬の画像を表示するサイトです。</p>
      <DogImage imageUrl={dogUrl} />
      <button onClick={fetchRandomDogUrl}>更新</button>
    </main>
  );
}
