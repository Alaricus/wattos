import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import images from '../images';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--sw-${props => props.available ? 'blue' : 'gray'});
  border-radius: 5px;
  height: 66vw;
  text-align: center;

  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 11rem;
  }
`;

const Thumbnail = styled.div`
  position: relative;
  flex: 1;
  box-shadow: inset 0 0 10px 3px var(--sw-${props => props.available ? 'blue' : 'gray'});

  &::after {
    position: absolute;
    content: '';
    background-image: url(${props => images[props.id3d]});
    background-position: center;
    background-size: cover;
    opacity: ${props => props.available ? '1' : '0.25'};
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @media only screen and (min-width: 768px) {
    background-size: contain;
  }
`;

const Text = styled.p`
  white-space: nowrap;
  overflow: hidden;
  color: var(--sw-${props => props.available ? 'dust' : 'gray'});
  margin: 0.5rem auto;
  text-transform: capitalize;
  line-height: 1rem;
  width: 95%;

  @media only screen and (min-width: 768px) {
    height: 1.3rem;
    font-size: 1rem;
  }
`;

const ModelName = styled.div`
  box-shadow: inset 0 0 10px 3px var(--sw-${props => props.available ? 'blue' : 'gray'});
  min-height: 2.1rem;
`;

const StyledLink = styled(Link)`
  border-radius: 5px;
  width: 100%;
  margin: 1rem 0 1rem;
  text-decoration: none;

  @media only screen and (min-width: 768px) {
    box-shadow: 2px 0 10px 3px var(--sw-${props => props.available ? 'blue' : 'gray'});
    width: 17rem;
    margin: 0 1rem 3rem 1rem;
  }
`;

const ShipCard = ({ ship }) => {
  const { name, available, id, id3d } = ship;

  return (
    <StyledLink to={`/ship/${id}`} available={available} >
      <Card available={available} >
        <Thumbnail available={available} id3d={id3d} />
        <ModelName available={available} >
          <Text available={available} >{name}</Text>
        </ModelName>
      </Card>
    </StyledLink>
  );
};

export default ShipCard;
