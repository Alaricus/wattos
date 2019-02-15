import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import LanguageBar from './Language';
import Inventory from './Inventory';
import ShipInfo from './ShipInfo';
import splash from './assets/splash.jpg';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-image: url(${splash});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  box-shadow: inset 0 -10px 20px 0 #000000;

  @media only screen and (min-width: 768px) {
    height: 29.7rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  padding: 2rem 0;
  color: var(--sw-silver);
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0;
  box-shadow: 0 0 20px 0 #000000;
  text-shadow:
    -1px 0 var(--sw-blue),
    0 1px var(--sw-blue),
    1px 0 var(--sw-blue),
    0 -1px var(--sw-blue);

  @media only screen and (min-width: 768px) {
    font-size: 4rem;
    height: 4rem;
    padding: 2rem 0;
    line-height: 3rem;
    width: 98%
  }
`;

const App = () => {
  const [language, setLanguage] = useState('aurebesh');
  const [ships, setShips] = useState([]);

  useEffect(() => {
    getShipData();
  }, []);

  const getShipData = async () => {
    try {
      const response = await fetch('https://demo7475333.mockable.io/spaceships');
      if (response.ok) {
        const result = await response.json();
        const stock = result.products.reduce((acc, cur) => {
          const id = cur.name.split(' ').join('-').toLowerCase();
          const ship = cur;
          ship.id = id;
          return [...acc, ship];
        }, []);
        setShips(stock);
      }
    } catch (err) {
      console.log(`Error fetching ship data: ${err}`);
    }
  };

  const Page = styled.div`
    display: inline-block;
    box-sizing: border-box;
    font-family: ${language};
    text-align: center;
    background-color: var(--sw-space);
    width: 100%;

    @media only screen and (min-width: 768px) {
      max-width: 60rem;
      margin-top: 2rem;
      border: 1px solid var(--sw-blue);
      border-radius: 5px;
    }
  `;

  const changeLanguage = (e) => {
    e.preventDefault();
    setLanguage(e.target.dataset.lang);
  };

  return (
    <Router>
      <Page>
        <Header>
          <Title>Watto’s Spaceship Emporium</Title>
          <LanguageBar handleClick={changeLanguage} current={language} />
        </Header>
        <Switch>
          <Route exact path="/" render={props => <Inventory {...props} ships={ships} />} />
          <Route path="/ship/:id" render={props => <ShipInfo {...props} ships={ships} />} />
        </Switch>
      </Page>
    </Router>
  );
};

export default App;
