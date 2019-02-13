import React, { useState, useEffect, Fragment } from 'react';
import ShipCard from './ShipCard';

const Inventory = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    getShipData(); // eslint-disable-line no-use-before-define
  }, []);

  const getShipData = async () => {
    try {
      const response = await fetch('https://demo7475333.mockable.io/spaceships');
      if (response.ok) {
        const result = await response.json();
        setShips(result.products);
      }
    } catch (err) {
      console.log(`Error fetching ship data: ${err}`);
    }
  };

  return (
    <Fragment>
      {
        ships && ships.map(ship => (<ShipCard ship={ship} key={ship.name} />))
      }
    </Fragment>
  );
};

export default Inventory;
