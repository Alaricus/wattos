import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import LanguageBar from './Language';
import Status from './Status';
import Inventory from './Inventory';
import ShipInfo from './ShipInfo';
import splash from '../assets/splash.png';

const Page = styled.div`
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  background-color: var(--sw-space);
  width: 100%;
  min-height: 90vh;

  @media only screen and (min-width: 768px) {
    max-width: 60rem;
    margin-top: 2rem;
    border: 1px solid var(--sw-blue);
    border-radius: 5px;
  }
  `;

  const GlobalStyle = createGlobalStyle`
    body {
      font-family: ${props => (props.language)};
    }
  `;

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
    box-shadow: inset 0 -10px 20px 3px var(--sw-space);

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
    width: 98%;
  }
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

export const ShipsCtx = createContext([null, () => {}]);

const App = () => {
  const [language, setLanguage] = useState('aurebesh');
  const [ships, setShips] = useState([]);
  const [status, setStatus] = useState('loading');

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
          ship.id3d = id3D[id];
          ship.available = true;
          return [...acc, ship];
        }, []);
        setShips(stock);
        setStatus('loaded');
      }
    } catch (err) {
      setStatus('failed');
    }
  };

  let content = <Status type={status} />;

  if (status === 'loaded') {
    content = (
      <ShipsCtx.Provider value={[ships, () => {}]}>
        <Router basename={`${process.env.PUBLIC_URL}`}>
          <Switch>
            <Route exact path="/" render={props => <Inventory {...props} />} />
            <Route path="/ship/:id" render={props => <ShipInfo {...props} />} />
            <Route component={Status} />
          </Switch>
        </Router>
      </ShipsCtx.Provider>
    );
  }

  if (status === 'failed') {
    content = <Status type={status} />;
  }

  const changeLanguage = (e) => {
    setLanguage(e.target.dataset.lang);
  };

  return (
    <Page>
      <GlobalStyle language={language} />
      <Header>
        <Title>Watto’s Spaceship Emporium</Title>
        <LanguageBar handleClick={changeLanguage} current={language} />
      </Header>
      { content }
    </Page>
  );
};

export default App;
