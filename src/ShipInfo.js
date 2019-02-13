import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
  border: 1px solid black;
  border-radius: 3px;
`;

const ShipInfo = ({ ship }) => {
  const { name, manufacturer, class: shipClass, price, techspecs } = ship;
  const specs = Object.keys(techspecs);

  return (
    <Info>
      <h3>{name}</h3>
      <img src={`https://api.adorable.io/avatars/100/${name}.png`} alt={name} />
      <p>Manufacturer: {manufacturer}</p>
      <p>Class: {shipClass}</p>
      <p>Price: {price || 'Come in person for an amazing discount!'}</p>
      <ul>
        {
          specs.map(spec => (<li key={spec}>{`${spec}: ${techspecs[spec]}`}</li>))
        }
      </ul>
    </Info>
  );
};

export default ShipInfo;
