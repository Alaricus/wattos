import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    getShipData();
  }, []);

  const getShipData = async () => {
    try {
      const response = await fetch('https://demo7475333.mockable.io/spaceships');
      if (response.ok) {
        const result = await response.json();
        setShips(result.products);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <p>Watto’s Spaceship Emporium</p>
      <ol>
        {
          ships && ships.map(ship => (<li key={ship.name}>{ship.name}</li>))
        }
      </ol>
    </div>
  );
};

export default App;
