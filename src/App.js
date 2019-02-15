import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import LanguageBar from './Language';
import Inventory from './Inventory';
import ShipInfo from './ShipInfo';

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--sw-silver);
  text-shadow:
    -1px 0 var(--sw-blue),
    0 1px var(--sw-blue),
    1px 0 var(--sw-blue),
    0 -1px var(--sw-blue);

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
    height: 4rem;
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
        setShips(stock); // Don't like this, but useEffect warns when async.
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
    border: 1px solid var(--sw-blue);
    border-radius: 5px;
    width: 100%;

    @media only screen and (min-width: 768px) {
      max-width: 60rem;
      margin-top: 2rem;
    }
  `;

  const changeLanguage = (e) => {
    e.preventDefault();
    setLanguage(e.target.dataset.lang);
  };

  return (
    <Router>
      <Page>
        <Title>Watto’s Spaceship Emporium</Title>
        <LanguageBar handleClick={changeLanguage} current={language} />
        <Switch>
          <Route exact path="/" render={props => <Inventory {...props} ships={ships} />} />
          <Route path="/ship/:id" render={props => <ShipInfo {...props} ships={ships} />} />
        </Switch>
      </Page>
    </Router>
  );
};

export default App;
