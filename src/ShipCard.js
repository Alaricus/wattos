import React, { useState } from 'react';
import styled from 'styled-components';
import ShipInfo from './ShipInfo';

const Card = styled.div`
  border: 1px solid black;
  border-radius: 3px;
`;

const ShipCard = ({ ship }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { name } = ship;

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <Card
      onClick={() => { handleClick(); }}
    >
      <h3>{name}</h3>
      <img src={`https://api.adorable.io/avatars/100/${name}.png`} alt={name} />
      { showInfo && <ShipInfo ship={ship} /> }
    </Card>
  );
};

export default ShipCard;
