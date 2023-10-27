import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = "0A38H02903J9203J";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

function Weather() {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async () => {
        try {
            const response = await axios.get(BASE_URL, {
                params: {
                    q: city,
                    units: "metric",
                    appid: API_KEY
                }
            });

            setWeatherData(response.data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />
            <button onClick={fetchWeather}>Get Weather</button>

            {weatherData && (
                <div>
                    <h2>{weatherData.name}</h2>
                    <p>{weatherData.weather[0].description}</p>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                </div>
            )}
        </div>
    );
}

export default Weather;
