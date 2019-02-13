import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: inline-block;
  border: 1px solid black;
  border-radius: 3px;
`;

const handleClick = (text) => {
  console.log(text);
};

const ShipCard = ({ ship }) => {
  const { name } = ship;
  return (
    <Card
      onClick={() => { handleClick(ship.name); }}
    >
      <h3>{name}</h3>
      <img src={`https://api.adorable.io/avatars/100/${name}.png`} alt={name} />
    </Card>
  );
};

export default ShipCard;
