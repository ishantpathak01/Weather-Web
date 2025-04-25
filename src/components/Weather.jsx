import React, { useEffect, useRef, useState } from 'react'
import './Weather.css';
import Search_icon from '../Assets/search.svg';
import clear_icon from '../Assets/clouds.svg';
import humidity_icon from '../Assets/humidity.png';
import wind_icon from '../Assets/wind.png';

const Weather = () => {
    const inputRef = useRef()
    const [weatherData, setWeatherData] = useState(false);
    const search = async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;


            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name
            })
        } catch (error) {

        }

    }
    useEffect(() => {
        search("london");
    }, [])
    return (
        <div className="weather">
            <div className="search-bar">
                <input ref={inputRef} type="text" placeholder='Search' />
                <img src={Search_icon} alt="search bar" onClick={() => search(inputRef.current.value)} />
            </div>

            <img src={clear_icon} alt="Weather Icon" className='weather-icon' />
            <p className='temperature'>{weatherData.temperature}°C</p>

            <p className='location'>{weatherData.location}</p>

            <div className="weather-data">
                <div className="col">
                    <img src={humidity_icon} alt="Humidity" />
                    <div>
                        <p>{weatherData.humidity}%</p>
                        <span>Humidity</span>
                    </div>
                </div>

                <div className="col">
                    <img src={wind_icon} alt="Wind Speed" />
                    <div>
                        <p>{weatherData.windSpeed}</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
        </div>
       
    )
};

export default Weather;
