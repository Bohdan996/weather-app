import { useState, useEffect } from 'react';
import './App.scss';
import { Search } from '../Search/Search';
import { Main } from '../Main/Main';
import { API, KEY, } from '../../constants/api';

export const App = () => {
  const [currentCity, setCurrentCity] = useState('');
  const [data, setData] = useState<Data | any>({});
  const [latitude, setLat] = useState(0);
  const [longitude, setLon] = useState(0);
  const [buttonColor, setButtonColor] = useState('#fff');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLon(position.coords.longitude);
      setLat(position.coords.latitude);
    });
  }, [])

  const fetchDataByCoords = (lat: number, lon: number) => {
    fetch(`${API}/weather?lat=${lat}&lon=${lon}&appid=${KEY}`)
      .then(data => data.json())
      .then(res => setData(res))
      .catch(error => console.log(error));
  }

  const fetchDataByCity = (currentCity: string) => {
    fetch(`${API}/weather?q=${currentCity}&appid=${KEY}`)
      .then(data => data.json())
      .then(res => setData(res))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    latitude && fetchDataByCoords(latitude, longitude);
  }, [latitude, longitude]);

  useEffect(() => {
    currentCity && fetchDataByCity(currentCity);
  }, [currentCity]);

  const temperature = (num: number) => {
    return Math.round(num - 273.15);
  };

  const dynamicColor = (temp: number) => {
    return temp > 0 ? 70 - temp : 160 + temp;
  };

  useEffect(() => {
    document.body.style.setProperty('transition', 'all, 0.3s')
    if (data.main) {
      if (temperature(data.main.temp) < -10) {
        document.body.style.setProperty('background-color', '#00ffff');
        setButtonColor('#00ffff')
      } else if (temperature(data.main.temp) > 30) {
        document.body.style.setProperty('background-color', '#ff8c00');
        setButtonColor('#ff8c00');
      } else {
        document.body.style.setProperty('background-color', `hsl(${dynamicColor(temperature(data.main.temp))}, 100%, 50%)`)
        setButtonColor(`hsl(${dynamicColor(temperature(data.main.temp))}, 100%, 50%)`);
      }
    }
  }, [data]);

  return (
    <>
      {data.main || currentCity ? (
        <div className="page">
          <h1 className="page__title">
            WEATHER.
          </h1>
          <Search
            setCurrentCity={setCurrentCity}
            buttonColor={buttonColor}
          />
          <Main
            data={data}
            temperature={temperature}
            buttonColor={buttonColor}
          />
        </div>
      ) : (
          <div className="loading">Loading...</div>
      )}
    </>
  );
};
