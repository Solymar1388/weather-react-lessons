import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Weather';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer>
          This project was coded by Olesia Libra and is {''}
          <a
            href="https://github.com/"
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


