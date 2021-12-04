/// <reference types="react-scripts" />

type Data = {
  main: {
    temp: number;
    feels_like: number,
    temp_min: number,
    temp_max: number,
    humidity: number
  },
  name: string,
  weather: [
    {
      icon: string
    }
  ],
  sys: {
    country: string
  },
  wind: {
    speed: number
  },
  clouds: {
    all: number
  },
}
