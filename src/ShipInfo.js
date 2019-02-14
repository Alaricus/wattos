import React from 'react';
import styled from 'styled-components';
import space from './assets/space.jpg';

const Info = styled.div`
  background-color: var(--new-hope-dust);
  padding: 0.5rem 0;

  @media only screen and (min-width: 768px) {
    padding: 1rem;
    width: 48rem;
    margin: 0 auto;
    border-radius: 0 0 5px 5px;
  }
`;

const Model = styled.iframe`
  display: block;
  background-image: url(${space});
  background-size: cover;
  width: 100%;
  height: 18rem;

  @media only screen and (min-width: 768px) {
    height: 25rem;
    border-radius: 5px;
  }
`;

const Details = styled.ul`
  text-align: left;
  list-style-type: none;
  padding: 0.5rem;
`;

const Aspect = styled.div`
  font-weight: bold;
  padding: 0.3rem;

  @media only screen and (min-width: 768px) {
    display: inline-block;
    width: 15%;
  }
`;

const Data = styled.div`
  padding: 0.3rem;

  @media only screen and (min-width: 768px) {
    display: inline-block;
    width: 80%;
    text-align: right;
  }
`;

const ShipInfo = ({ ships, match }) => {
  const ship = ships.find(item => item.id === match.params.id);
  const id3D = {
    'twin-ion-engine-starfighter': 'QGbBq',
    't-65-x-wing-starfighter': 'HBhDd',
    'y-wing-starfighter': 'e1bbc',
    'yt-1300-light-freighter': 'FLfkh',
    'alpha-class-xg-1-star-wing': 'uksPm',
    'lambda-class-t-4a-shuttle': 'rdDEP',
    'rz-1-a-wing-interceptor': 'LaEdm',
    'b-wing-heavy-assault-starfighter': 'yqoE0',
  };

  if (!ship) {
    return (
      <Info>
        <h3>This is not the ship you are looking for!</h3>
      </Info>
    );
  }

  const { name, manufacturer, class: shipClass, price, techspecs } = ship;
  const specs = Object.keys(techspecs);

  return (
    <Info>
      <h3>{name}</h3>
      <Model
        title={ship.id}
        frameBorder="0"
        seamless
        src={`https://p3d.in/e/${id3D[ship.id]}+spin+load+bg-none+nopan+nozoom+norotate+controls,border,loader-hidden`}
      />
      <p>Manufacturer: {manufacturer}</p>
      <p>Class: {shipClass}</p>
      <p>Price: {price || 'Come in person for an amazing discount!'}</p>
      <Details>
        {
          specs.map(spec => (
            <li key={spec}>
              <Aspect>{`${spec}:`}</Aspect>
              <Data>{techspecs[spec]}</Data>
            </li>
          ))
        }
      </Details>
    </Info>
  );
};

export default ShipInfo;
