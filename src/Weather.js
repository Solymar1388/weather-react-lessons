import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo"
import "./Weather.css"
import axios from "axios"

export default function Weather(props){
const [weatherData, setWeatherData] = useState({ready: false})
const [city, setCity] = useState(props.defaultCity)
function handleResponse(response) {
setWeatherData({
ready: true,
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
const apiKey = 'ce41b28ce42cc32953b2215b8a1bd7b5';
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
    <div className="col-9">
        <input
        type="search"
        placeholder="Enter a city..."
        className="form-control"
        autoFocus="on"
        onChange={handleCityChange}
        />
    </div>
    <div className="col-3">
        <input
        type="submit"
        value="search"
        className="btn btn-primary w-100"
        />
    </div>
    </div>
</form>
<WeatherInfo data={weatherData}/>

</div>
);
} else {
search()

return "Loading..."
}




}