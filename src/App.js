import React from 'react';
import './App.css';
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
      <main>
      {process.env.REACT_APP_API_KEY}
        <Forecast />
      </main>
    </div>
  );
}

export default App;
