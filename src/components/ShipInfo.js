import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Status from './Status';
import images from '../images';

const Info = styled.div`
  padding: 0.5rem 0;

  @media only screen and (min-width: 768px) {
    padding: 1rem;
    margin: 0 auto;
    border-radius: 0 0 5px 5px;
  }
`;

const Name = styled.h2`
  text-transform: capitalize;
  height: 2rem;
  line-height: 1rem;
`;

const Major = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Cover = styled.div`
  position: absolute;
  width: 100%;
  height: 18rem;

  @media only screen and (min-width: 768px) {
    width: 60%;
    height: 25rem;
  }
`;

const Model = styled.iframe`
  display: block;
  background-size: cover;
  width: 100%;
  height: 18rem;

  background-image: radial-gradient(var(--sw-blue) 1%, var(--sw-space) 40%, transparent 55%);

  @media only screen and (min-width: 768px) {
    width: 60%;
    height: 25rem;
    border-radius: 5px;
  }
`;

const Picture = styled.img`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
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
  font-size: 1.2rem;
  height: 3rem;
  width: 100%;
  padding: 0.1rem 0.4rem;
  border: none;
  border-radius: 5px;
  font-family: inherit;
  margin-top: 1rem;
`;

const Minor = styled.ul`
  text-align: left;
  list-style-type: none;
  padding: 0.5rem;
`;

const Fact = styled.div`
  display: flex;
`;

const Category = styled.div`
flex: 1;
  padding: 0.3rem;
  text-transform: capitalize;

  @media only screen and (min-width: 768px) {
    display: inline-block;
    padding: 0.3rem 0 0.3rem 0.4rem;
  }
`;

const Data = styled.div`
  flex: 2;
  padding: 0.3rem;
  text-transform: capitalize;

  @media only screen and (min-width: 768px) {
    display: inline-block;

    text-align: right;
  }
`;

const Return = styled(Link)`
  position: fixed;
  left: 0.1rem;
  top: 0.1rem;
  display: inline-block;
  text-decoration: none;
  background-color: var(--sw-blue);
  color: var(--sw-silver);
  border-radius: 50px;
  height: 2.2rem;
  width: 3.2rem;
  padding-top: 1rem;
  line-height: 1rem;

  @media only screen and (min-width: 768px) {
    position: absolute;
    left: 0;
    top: -5.2rem;
  }
`;

const ShipInfo = ({ ships, match }) => {
  const ship = ships.find(item => item.id === match.params.id);

  if (!ship) {
    return <Status />;
  }

  const { name, manufacturer, class: shipClass, price, techspecs } = ship;
  const specs = Object.keys(techspecs);

  return (
    <Fragment>
      <Name>{name}</Name>
      <Info>
        <Major>
          <Return to="/">Back</Return>
          <Cover />
          <Model
            title={ship.id}
            frameBorder="0"
            seamless
            src={`https://p3d.in/e/${ship.id3d}+spin+load+bg-none+nopan+nozoom+norotate+controls,border,loader-hidden`}
          />
          <Details>
            <Picture src={images[ship.id3d]} alt={ship.name} />
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
                <Fact>
                  <Category>{`${spec}:`}</Category>
                  <Data>{techspecs[spec]}</Data>
                </Fact>
              </li>
            ))
          }
        </Minor>
      </Info>
    </Fragment>
  );
};

export default ShipInfo;
