import React, { useState, useEffect } from "react"

import WeatherForecastDay from "./WeatherForecastDay";
import './WeatherForecast.css';
import axios from "axios"

export default function WeatherForecast(props){

    const unit = props.unit;

let [loaded, setLoaded] = useState(false)
let [forecast, setForecast] = useState(null)

useEffect (() => {
    setLoaded(false)
}, [props.coordinates])

function handleResponse(response){
    setForecast(response.data.daily)
    setLoaded(true)
}

    

    if (loaded) {

return (
    <div className="WeatherForecast">
    <div className="row">
        {forecast.map(function(dailyForecast, index) {
            if (index < 5) {return (
                            <div className="col" key={index}>
                            <WeatherForecastDay
                                unit={unit}
                                data={dailyForecast}
                            />
                            </div>
                        );}
            else {
                return null
            }
            
        })}
        
    </div>
    </div>
);

    } else {
        
let apiKey = '4c9b53e4f8f5eb00df5915bdca340605';
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return null;
    }

    
}