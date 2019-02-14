import React, { useState } from 'react';
import styled from 'styled-components';
import LanguageBar from './Language';
import Inventory from './Inventory';

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--new-hope-black);
  text-shadow: -1px 0 var(--new-hope-blue),
    0 1px var(--new-hope-blue),
    1px 0 var(--new-hope-blue),
    0 -1px var(--new-hope-blue);

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const App = () => {
  const [language, setLanguage] = useState('aurebesh');

  const Root = styled.div`
    font-family: ${language};
    text-align: center;
  `;

  const changeLanguage = (e) => {
    e.preventDefault();
    setLanguage(e.target.dataset.lang);
  };

  return (
    <Root>
      <Title>Watto’s Spaceship Emporium</Title>
      <LanguageBar handleClick={changeLanguage} current={language} />
      <Inventory />
    </Root>
  );
};

export default App;
