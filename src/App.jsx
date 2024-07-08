// App.jsx
import React, { useState } from 'react';
import './App.css';
import { Header } from './Header';
import { Description } from './Description';
import { DogListContainer } from './DogListContainer';

/**
 * @returns {JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');

  const fetchRandomDogUrl = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    setDogUrl(data.message);
    console.log("Dog URL updated!");
  };

  return (
    <div>
      <Header />
      <Description dogUrl={dogUrl} fetchRandomDogUrl={fetchRandomDogUrl} />
      <DogListContainer />
    </div>
  );
};
