import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
  padding: 0.5rem 0;

  @media only screen and (min-width: 768px) {
    padding: 1rem;
    margin: 0 auto;
    border-radius: 0 0 5px 5px;
  }
`;

const Major = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Model = styled.iframe`
  display: block;
  background-size: cover;
  width: 100%;
  height: 18rem;
  background-color: var(--sw-space);

  @media only screen and (min-width: 768px) {
    width: 60%;
    height: 25rem;
    border-radius: 5px;
  }
`;

const Details = styled.div`
  flex: 1;
  padding: 0 1rem;
  color: var(--sw-silver);
  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: left;
    margin-top: 3rem;
  }
`;

const Purchase = styled.button`
  color: var(--sw-silver);
  background-color: var(--sw-blue);
  font-size: 1rem;
  height: 3rem;
  width: 100%;
  padding: 0.1rem 0.4rem;
  border: none;
  border-radius: 5px;
  font-family: inherit;

  @media only screen and (min-width: 768px) {
    width: 9rem;
  }
`;

const Minor = styled.ul`
  text-align: left;
  list-style-type: none;
  padding: 0.5rem;
`;

const Aspect = styled.div`
  padding: 0.3rem;

  @media only screen and (min-width: 768px) {
    display: inline-block;
    padding: 0.3rem 0 0.3rem 0.4rem;
    width: 18%;
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
      <Major>
        <Model
          title={ship.id}
          frameBorder="0"
          seamless
          src={`https://p3d.in/e/${id3D[ship.id]}+spin+load+bg-none+nopan+nozoom+norotate+controls,border,loader-hidden`}
        />
        <Details>
          <p>Manufacturer: {manufacturer}</p>
          <p>Class: {shipClass}</p>
          <p>Price: {price || 'Come in person for an amazing discount!'}</p>
          <Purchase type="button">Purchase</Purchase>
        </Details>
      </Major>
      <Minor>
        {
          specs.map(spec => (
            <li key={spec}>
              <Aspect>{`${spec}:`}</Aspect>
              <Data>{techspecs[spec]}</Data>
            </li>
          ))
        }
      </Minor>
    </Info>
  );
};

export default ShipInfo;
