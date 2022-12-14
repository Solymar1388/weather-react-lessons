import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Weather';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer className="text-center">
          This project was coded by Olesia Libra and is {''}
          <a
            href="https://github.com/Solymar1388/weather-react-lessons"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}


