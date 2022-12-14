import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo"
import WeatherForecast from "./WeatherForecast"
import "./Weather.css"
import axios from "axios"

export default function Weather(props){
  const [unit, setUnit] = useState('celsius');
const [weatherData, setWeatherData] = useState({ready: false})
const [city, setCity] = useState(props.defaultCity)
function handleResponse(response) {
setWeatherData({
  ready: true,
  coordinates: response.data.coord,
  city: response.data.name,
  date: new Date(response.data.dt * 1000),
  description: response.data.weather[0].description,
  icon: response.data.weather[0].icon,
  temperature: response.data.main.temp,
  humidity: response.data.main.humidity,
  wind: response.data.wind.speed,
});
}

function search(){
const apiKey = '4c9b53e4f8f5eb00df5915bdca340605';
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
    event.preventDefault()
    search()
}

function handleCityChange(event){
setCity(event.target.value)
}

if (weatherData.ready) {
return (
  <div className="Weather">
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoFocus="on"
            onChange={handleCityChange}
          />
        </div>
        <div className="col-4">
          <input
            type="submit"
            value="search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
    <WeatherInfo data={weatherData} unit={unit} setUnit={setUnit} />
    <hr/>
    <WeatherForecast unit={unit} coordinates={weatherData.coordinates} />
  </div>
);
} else {
search()
  return "Loading..."
  }
}
