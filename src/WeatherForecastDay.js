import React from "react"
import WeatherIcon from './WeatherIcon';

// export default function WeatherForecastDay(props) {
//     function maxTemperature(){
//         let temperature = Math.round(props.data.temp.max);
//         return `${temperature}°`;
//     }

//         function minTemperature() {
//           let temperature = Math.round(props.data.temp.min);
//           return `${temperature}°`;
//         }

//    function day() {
//     let date = new Date(props.data.dt * 1000)
//     let day = date.getDay()
//     let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//     return days[day];
//    }     

//  return (
//    <div className="WeatherForecastDay">
//      <div className="WeatherForecast-day">{day()}</div>
//      <WeatherIcon code={props.data.weather[0].icon} size={32} />
//      <div className="WeatherForecast-temperatures">
//        <span className="WeatherForecast-temperature-max">
//          {maxTemperature()}
//        </span>
//        <span className="WeatherForecast-temperature-min">
//          {minTemperature()}
//        </span>
//      </div>
//    </div>
//  );
// }


export default function WeatherForecastDay(props) {
  const unit = props.unit;

    function fahrenheit(temp) {
      return (temp * 9) / 5 + 32;
    }

      function maxTemperatureFahrenheit() {
        let temperature = Math.round(fahrenheit(props.data.temp.max));
        return `${temperature}°`;
      }

    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature() {
      let temperature = Math.round(props.data.temp.min);
      return `${temperature}°`;
    }

      function minTemperatureFahrenheit() {
        let temperature = Math.round(fahrenheit(props.data.temp.min));
        return `${temperature}°`;
      }

   function day() {
    let date = new Date(props.data.dt * 1000)
    let day = date.getDay()
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return days[day];
   }     

   if (unit === 'celsius') {
 return (
   <div className="WeatherForecastDay">
     <div className="WeatherForecast-day">{day()}</div>
     <WeatherIcon code={props.data.weather[0].icon} size={36} color="#fc709b" />
     <div className="WeatherForecast-temperatures">
       <span className="WeatherForecast-temperature-max">
         {maxTemperature()}
       </span>
       <span className="WeatherForecast-temperature-min">
         {minTemperature()}
       </span>
     </div>
   </div>
 );
   } else {
    return (
      <div className="WeatherForecastDay">
        <div className="WeatherForecast-day">{day()}</div>
        <WeatherIcon
          code={props.data.weather[0].icon}
          size={36}
          color="#fc709b"
        />
        <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max">
            {maxTemperatureFahrenheit()}
          </span>
          <span className="WeatherForecast-temperature-min">
            {minTemperatureFahrenheit()}
          </span>
        </div>
      </div>
    );
   }
}