import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherInfo() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather',
          {
            params: {
              q: 'Bangalore',
              appid: 'YOUR_API_KEY',
              units: 'metric',
            },
          }
        );
        setWeather(response.data);
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="weather-info">
      {weather ? (
        <>
          <h4>Weather in {weather.name}</h4>
          <p>{weather.main.temp}°C - {weather.weather[0].description}</p>
        </>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}

export default WeatherInfo;
