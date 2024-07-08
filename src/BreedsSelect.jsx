// BreedsSelect.js
import React from 'react';

/**
 * @param {{ breeds: string[], selectedBreed: string, onSelectBreed: (breed: string) => void }} props
 * @returns {JSX.Element}
 */
export const BreedsSelect = ({ breeds, selectedBreed, onSelectBreed }) => {
  return (
    <div>
      <label htmlFor="breeds">犬種を選択:</label>
      <select
        id="breeds"
        value={selectedBreed}
        onChange={(e) => onSelectBreed(e.target.value)}
      >
        <option value="">犬種を選択してください</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  );
};
