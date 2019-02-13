import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
  border: 1px solid black;
  border-radius: 3px;
`;

const ShipInfo = ({ ship }) => {
  const { name, manufacturer, class: shipClass, price } = ship;
  return (
    <Info>
      <h3>{name}</h3>
      <img src={`https://api.adorable.io/avatars/100/${name}.png`} alt={name} />
      <p>Manufacturer: {manufacturer}</p>
      <p>Class: {shipClass}</p>
      <p>Price: {price}</p>
    </Info>
  );
};

export default ShipInfo;
