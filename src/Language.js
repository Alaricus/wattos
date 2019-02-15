import React, { Fragment } from 'react';
import styled from 'styled-components';

const LangButton = styled.button`
  font-size: 1rem;
  height: 1.8rem;
  padding: 0.1rem 0.4rem;
  border: none;

  color: var(--sw-space);
  background-color: var(--sw-dust);
  cursor: pointer;
  vertical-align: middle;
`;

const Language = ({ handleClick, current }) => {
  const Aurebesh = styled(LangButton)`
    font-family: "aurebesh";
    border-radius: 5px 0 0 5px;
    background-color: ${current === 'aurebesh' && 'var(--sw-blue)'};
    color: ${current === 'aurebesh' && 'var(--sw-silver)'};
  `;

  const Mandalorian = styled(LangButton)`
    font-family: "mandalorian";
    background-color: ${current === 'mandalorian' && 'var(--sw-blue)'};
  `;

  const Darkkatarn = styled(LangButton)`
    font-family: "darkkatarn";
    background-color: ${current === 'darkkatarn' && 'var(--sw-blue)'};
  `;

  const English = styled(LangButton)`
    font-family: sans-serif;
    border-radius: 0 5px 5px 0;
    background-color: ${current === 'sans-serif' && 'var(--sw-blue)'};
  `;

  return (
    <Fragment>
      <Aurebesh
        type="button"
        onClick={handleClick}
        data-lang="aurebesh"
      >
        Aurebesh
      </Aurebesh>
      <Mandalorian onClick={handleClick} data-lang="mandalorian">Mandalorian</Mandalorian>
      <Darkkatarn onClick={handleClick} data-lang="darkkatarn">Katarn</Darkkatarn>
      <English onClick={handleClick} data-lang="sans-serif">English</English>
    </Fragment>
  );
};

export default Language;
