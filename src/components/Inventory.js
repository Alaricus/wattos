import React, { useContext } from 'react';
import styled from 'styled-components';
import { ShipsCtx } from './App';
import ShipCard from './ShipCard';

const Cards = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-flow: row wrap;
  justify-content: center;
  background-color: var(--sw-space);
  padding: 1rem 0 0 0;

  @media only screen and (min-width: 768px) {
    padding: 3rem 1rem 0 1rem;
    width: 100%;
    max-width: 60rem;
    margin: 0 auto;
    border-radius: 0 0 5px 5px;
  }
`;

const Inventory = () => {
  const [ships] = useContext(ShipsCtx);
  ships.sort((a, b) => b.available - a.available);
  return (
    <Cards>
      {
        ships && ships.map(ship => (<ShipCard ship={ship} key={ship.id} />))
      }
    </Cards>
  );
};

export default Inventory;
