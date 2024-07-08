import React, { useState, useEffect } from 'react';
import { BreedsSelect } from './BreedsSelect';

/**
 * @returns {JSX.Element}
 */
export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('shiba');
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        const breedsList = Object.keys(data.message);
        setBreeds(breedsList);
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  useEffect(() => {
    const fetchInitialDogImages = async () => {
      try {
        const response = await fetch(`https://dog.ceo/api/breed/shiba/images/random/12`);
        const data = await response.json();
        setDogImages(data.message);
      } catch (error) {
        console.error('Error fetching dog images:', error);
      }
    };

    fetchInitialDogImages();
  }, []);

  const fetchDogImages = async () => {
    if (selectedBreed) {
      try {
        const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`);
        const data = await response.json();
        setDogImages(data.message);
      } catch (error) {
        console.error('Error fetching dog images:', error);
      }
    }
  };

  return (
    <div>
      <h2>犬種一覧</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <BreedsSelect 
          breeds={breeds} 
          selectedBreed={selectedBreed} 
          onSelectBreed={setSelectedBreed} 
        />
        <button onClick={fetchDogImages}>表示</button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
        {dogImages.length > 0 ? (
          dogImages.map((image, index) => (
            <img key={index} src={image} alt="犬の画像" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
          ))
        ) : (
          <p>画像がありません</p>
        )}
      </div>
    </div>
  );
};
