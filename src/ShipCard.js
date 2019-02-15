import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import images from './images';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--sw-blue);
  border-radius: 5px;
  box-shadow: inset 0 0 10px 3px var(--sw-blue);
  height: 66vw;
  text-align: center;

  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 11rem;
  }
`;

const ModelName = styled.div`
  box-shadow: inset 0 0 10px 3px var(--sw-blue);
  min-height: 2.1rem;
`;

const Text = styled.p`
  white-space: nowrap;
  overflow: hidden;
  color: var(--sw-dust);
  margin: 0.5rem auto;
  text-transform: capitalize;

  @media only screen and (min-width: 768px) {
    font-size: 0.9rem;
  }
`;


const StyledLink = styled(Link)`
border-radius: 5px;
width: 100%;
margin: 1rem 0 1rem;
text-decoration: none;

@media only screen and (min-width: 768px) {
  box-shadow: 2px 0 10px 3px var(--sw-blue);
  width: 17rem;
  margin: 0 1rem 3rem 1rem;
}
`;

const ShipCard = ({ ship }) => {
  const { name } = ship;

  const Thumbnail = styled.div`
    flex: 1;
    box-shadow: inset 0 0 10px 3px var(--sw-blue);
    background-image: url(${images[ship.id3d]});
    background-position: center;
    background-size: cover;

    @media only screen and (min-width: 768px) {
      background-size: contain;
    }
  `;

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
