import React from 'react';
import styled from 'styled-components';
import space from './assets/space.jpg';

const Info = styled.div`
  border: 1px solid var(--new-hope-black);
  border-radius: 3px;
`;

const Model = styled.iframe`
  display: block;
  background-image: url(${space});
  background-size: contain;
  width: 100%;
`;

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

const ShipInfo = ({ ship }) => {
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
      <ul>
        {
          specs.map(spec => (<li key={spec}>{`${spec}: ${techspecs[spec]}`}</li>))
        }
      </ul>
    </Info>
  );
};

export default ShipInfo;
