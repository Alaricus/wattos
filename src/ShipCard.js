import React, { useState } from 'react';
import styled from 'styled-components';
import ShipInfo from './ShipInfo';
import placeholderImage from './assets/placeholder.jpg';

const Card = styled.div`
  border-radius: 0 0 5px 5px;
  background-color: var(--new-hope-silver);
  width: 100%;
  height: 50%;
  margin: 0 0.5rem 1rem 0.5rem;
  text-align: center;
  box-shadow: 0 4px 8px 0 var(--new-hope-brown), 0 6px 20px 0 var(--new-hope-brown);
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    width: 17rem;

    margin: 0 1rem 3rem 1rem;
  }
`;

const ModelName = styled.p`
  white-space: nowrap;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    margin: 0.25rem;
    font-size: 0.9rem;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const ShipCard = ({ ship }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { name } = ship;

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <Card onClick={() => { handleClick(); }} >
      <Thumbnail src={placeholderImage} alt={name} />
      <ModelName>{name}</ModelName>
      { showInfo && <ShipInfo ship={ship} /> }
    </Card>
  );
};

export default ShipCard;
