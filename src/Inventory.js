import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ShipCard from './ShipCard';

const CardDeck = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Inventory = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    getShipData();
  }, []);

  const getShipData = async () => {
    try {
      const response = await fetch('https://demo7475333.mockable.io/spaceships');
      if (response.ok) {
        const result = await response.json();
        const stock = result.products.reduce((acc, cur) => {
          const id = cur.name.split(' ').join('-').toLowerCase();
          const ship = cur;
          ship.id = id;
          return [...acc, ship];
        }, []);
        setShips(stock); // Don't like this, but useEffect warns when async.
      }
    } catch (err) {
      console.log(`Error fetching ship data: ${err}`);
    }
  };

  return (
    <CardDeck>
      {
        ships && ships.map(ship => (<ShipCard ship={ship} key={ship.id} />))
      }
    </CardDeck>
  );
};

export default Inventory;
