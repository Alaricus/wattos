import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import placeholderImage from './assets/placeholder.jpg';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--new-hope-blue);
  box-shadow: inset 0 0 10px 3px var(--new-hope-blue);
  height: 66vw;
  text-align: center;

  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 11rem;
  }
`;

const ModelName = styled.div`
  box-shadow: inset 0 0 10px 3px var(--new-hope-blue);
  min-height: 2.1rem;
`;

const Text = styled.p`
  white-space: nowrap;
  overflow: hidden;
  color: var(--new-hope-dust);

  @media only screen and (min-width: 768px) {
    margin: 0.5rem auto;
    font-size: 0.9rem;
  }
`;

const Thumbnail = styled.div`
  flex: 1;
  box-shadow: inset 0 0 10px 3px var(--new-hope-blue);
  background-image: url(${placeholderImage});
  background-position: center;
  background-size: cover;

  @media only screen and (min-width: 768px) {
    background-size: contain;
  }
`;

const StyledLink = styled(Link)`
  border-radius: 0 0 5px 5px;
  width: 100%;
  box-shadow: 2px 0 20px 5px var(--new-hope-blue);
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
        <Thumbnail />
        <ModelName>
          <Text>{name}</Text>
        </ModelName>
      </Card>
    </StyledLink>
  );
};

export default ShipCard;
