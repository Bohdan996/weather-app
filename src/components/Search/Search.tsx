import React, { useState } from 'react';
import './Search.scss';

type Props = {
  setCurrentCity: (arg: string) => void,
  buttonColor: string,
};

export const Search: React.FC<Props> = ({ setCurrentCity, buttonColor }) => {
  const [city, setCity] = useState('');
  const [placeholder, setPlaceholder] = useState("Weather in your city");
  const [emptyInput, setEmptyInput] = useState(false);

  const handleButtonClick = () => {
    if (city.trim() === "") {
      setPlaceholder('')
      setEmptyInput(true);
    } else {
      setCurrentCity(city);
      setPlaceholder('Weather in your city');
    }
  };

  const handleInputClick = () => {
    if (city.length === 0) {
      setPlaceholder('Weather in your city');
      setEmptyInput(false);
    }
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (city.length === 0) {
      setPlaceholder('Weather in your city');
      setEmptyInput(false);
    }

    setCity(e.target.value);
  };

  const handleKeyPress = (e: any) => {
    if (city.trim().length === 0) {
      setPlaceholder('')
      setEmptyInput(true);
    }

    if (e.key === 'Enter') {
      handleButtonClick();
    }
  }

  return (
    <div className="search">
      <div className="search__container">
        <label>
          <input
            type="text"
            placeholder={placeholder}
            value={city}
            onChange={handleInputChange}
            onClick={handleInputClick}
            className="search__input"
            onKeyPress={handleKeyPress}
            style={{
              borderColor: buttonColor,
            }}
          />
          <p className="search__warning">
            {emptyInput && (
              'Please write your city'
            )}
          </p>
          
        </label>
        <button
          type="button"
          className="search__btn"
          onClick={handleButtonClick}
          style={{
            backgroundColor: buttonColor,
            borderColor: buttonColor,
          }}
        >
          Search
        </button>
      </div>

    </div>
  );
};
