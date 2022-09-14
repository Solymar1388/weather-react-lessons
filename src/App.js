import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project was coded by Olesia Libra and is {''}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
          <button class="btn btn-primary">Button</button>
        </footer>
      </div>
    </div>
  );
}


