import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Status from './Status';
import Model from './Model';
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
  border: 1px solid var(--sw-space);
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

const Confirmation = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 200;
  color: var(--sw-silver);
  background-color: var(--sw-space);
  border: 1px solid var(--sw-blue);
  border-radius: 5px;
  padding: 0 0.5rem 1rem 0.5rem;
  top 2rem;

  @media only screen and (min-width: 768px) {
    top: 25%;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 2rem;
    width: 40rem;
  }
`;

const Block = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.85);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const ShipInfo = ({ ships, match, history, purchase }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const ship = ships.find(item => item.id === match.params.id);

  if (!ship) {
    return <Status />;
  }

  const { name, manufacturer, class: shipClass, price, techspecs, available, id, id3d } = ship;
  const specs = Object.keys(techspecs);

  const handlePurchase = () => {
    available && setShowConfirmation(true);
  };

  const confirm = () => {
    purchase(id);
    history.push('/');
  };

  const Purchase = styled.button`
    color: var(--sw-silver);
    background-color: var(--sw-${available ? 'blue' : 'gray'});
    font-size: 1.2rem;
    height: 3rem;
    width: 100%;
    padding: 0.1rem 0.4rem;
    border: none;
    border-radius: 5px;
    font-family: inherit;
    margin-top: 1rem;
  `;

  const Confirm = styled(Purchase)`
    max-width: 20rem;
    margin: 0 auto;

    @media only screen and (min-width: 768px) {
      margin-top: 2rem;
    }
  `;

  return (
    <Fragment>
      <Name>{name}</Name>
      <Info>
        <Major>
          <Return to="/">Back</Return>
          <Cover />
          <Model id={id} id3d={id3d} />
          <Details>
            <Picture src={images[id3d]} alt={name} />
            <p>Manufacturer: {manufacturer}</p>
            <p>Class: {shipClass}</p>
            <p>Price: {price || 'Come in person for an amazing discount!'}</p>
            <Purchase type="button" onClick={handlePurchase} >
              { available ? 'Purchase' : 'Sold Out' }
            </Purchase>
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
        {
          showConfirmation &&
          <Block>
            <Confirmation>
              <h2>Congratulations!</h2>
              <p>The {name} is now {price ? 'yours' : 'being held for you'}!</p>
              {price && <p>{price} have been removed from your account.</p>}
              <p>Pick up your new ship at our Mos Espa location.</p>
              {!price && <p>(We will tell you the price when you get here.)</p>}
              <Confirm onClick={confirm} >OK</Confirm>
            </Confirmation>
          </Block>
        }
      </Info>
    </Fragment>
  );
};

export default ShipInfo;
