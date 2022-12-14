import React from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from "./WeatherIcon"
import WeatherTemperature from "./WeatherTemperature"

export default function WeatherInfo(props){
  const unit = props.unit;
  const setUnit = props.setUnit;

return (
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <ul>
      <li>
        <FormattedDate date={props.data.date} />
      </li>
      <li className="text-capitalize">{props.data.description}</li>
    </ul>
    <div className="row mt-3">
      <div className="col-6">
        <div className="d-flex flex-wrap justify-content-center">
          <div>
            <WeatherIcon code={props.data.icon} size={50} color="#8064e9" />
          </div>
          <div className="d-flex flex-wrap">
            <WeatherTemperature
              unit={unit}
              setUnit={setUnit}
              celsius={props.data.temperature}
            />
          </div>
        </div>
      </div>
      <div className="col-6 d-flex flex-column justify-content-center">
        <ul className="">
          <li>Humidity: {props.data.humidity} %</li>
          <li>Wind: {Math.round(props.data.wind)} km/h</li>
        </ul>
      </div>
    </div>
  </div>
);
}
