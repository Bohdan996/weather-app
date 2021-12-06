import React, { useState } from 'react';
import './style.scss'

type Props = {
  data: Data,
  temperature: (num: number) => number,
  buttonColor: string,
};

const Main: React.FC<Props> = ({ data, temperature, buttonColor }) => {
  const [tempType, setTempType] = useState('C');

  const countryImg = (country: string) => {
    if (data.sys) {
      console.log(data)
      return country.toLowerCase();
    }
  };

  const changeTempType = (e: any) => {
    e.preventDefault()
    setTempType(e.currentTarget.textContent);
  };

  const getFahrenheitTemp = (temp: number) => {
    return Math.round((temp - 273.15) * 9 / 5 + 32);
  };

  return (
    <>
      {data.main ? (
        <div className="main-content">
          <div className="title">
            <div className="title__country-img" style={{
              backgroundImage: `url('https://openweathermap.org/images/flags/${countryImg(data.sys.country)}.png')`
            }}>
            </div>
            <h2 className="title__text">
              {data.name}, {data.sys.country}
            </h2>
          </div>
          <div className="main-container">
            <div className="temperature">
              <div className="temperature__image" style={{
                backgroundImage: `url('https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png')`
              }}></div>
              <h3 className="temperature__value width">
                {tempType === 'C' ? (
                  `${temperature(data.main.temp)} ${tempType}`
                ) : (
                  `${getFahrenheitTemp(data.main.temp)} ${tempType}`
                )}
              </h3>
              <button
                type="button"
                className="temperature__button temperature__button--left"
                onClick={changeTempType}
                style={{
                  borderColor: buttonColor,
                }}
              >
                C
              </button>
              <button
                type="button"
                className="temperature__button temperature__button--right"
                onClick={changeTempType}
              >
                F
              </button>
            </div>
          </div>
          <div className="info">
            <div className="left-side-info">
              <div className="info__wrap">
                <h4 className="info__text">
                  Feels like: <span className="width">
                    {tempType === 'C' ? (
                      `${temperature(data.main.feels_like)} C`
                    ) : (
                      `${getFahrenheitTemp(data.main.feels_like)} F`
                    )}
                  </span>
                </h4>
              </div>
              <div className="info__wrap">
                <h4 className="info__text">
                  min-temperature: {tempType === 'C' ? (
                    `${temperature(data.main.temp_min)} C`
                  ) : (
                    `${getFahrenheitTemp(data.main.temp_min)} F`
                  )}
                </h4>
              </div>
              <div className="info__wrap">
                <h4 className="info__text">
                  max-temperature: {tempType === 'C' ? (
                    `${temperature(data.main.temp_max)} C`
                  ) : (
                    `${getFahrenheitTemp(data.main.temp_max)} F`
                  )}
                </h4>
              </div>
            </div>

            <div className="rigth-side-info">
              <div className="info-wrap">
                <h4 className="info__text">
                  Wind speed: {data.wind.speed} m/s.
                </h4>
              </div>
              <div className="info-wrap">
                <h4 className="info__text">
                  Clouds: {data.clouds.all} %
                </h4>
              </div>
              <div className="info-wrap">
                <h4 className="info__text">
                  Humidity: {data.main.humidity} %
                </h4>
              </div>
            </div>
          </div>
        </div>
      ) : (
          <div className="error">
            City not found
          </div>
      )}
    </>
  );
};

export default Main;
