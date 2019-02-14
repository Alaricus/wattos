import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import placeholderImage from './assets/placeholder.jpg';

const Card = styled.div`
  border-radius: 0 0 5px 5px;
  background-color: var(--new-hope-silver);
  width: 100%;
  height: 50%;
  text-align: center;

  @media only screen and (min-width: 768px) {
    height: 11rem;
  }
`;

const ModelName = styled.p`
  white-space: nowrap;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    margin: 0.5rem auto;
    font-size: 0.9rem;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const StyledLink = styled(Link)`
  background-color: var(--new-hope-silver);
  width: 100%;
  box-shadow: 0 2px 8px 0 var(--new-hope-tan);
  margin: 1rem 0 1rem;
  text-decoration: none;

  @media only screen and (min-width: 768px) {
    width: 17rem;
    margin: 0 1rem 3rem 1rem;
  }
`;

const ShipCard = ({ ship }) => {
  const { name } = ship;

  return (
    <StyledLink to={`/ship/${ship.id}`}>
      <Card>
        <Thumbnail src={placeholderImage} alt={name} />
        <ModelName>{name}</ModelName>
      </Card>
    </StyledLink>
  );
};

export default ShipCard;
