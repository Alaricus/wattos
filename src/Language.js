import React, { Fragment } from 'react';
import styled from 'styled-components';

const LangButton = styled.button`
  font-size: 1rem;
  height: 1.8rem;
  padding: 0.1rem 0.4rem;
  border: none;

  color: var(--new-hope-silver);
  background-color: var(--new-hope-tan);
  cursor: pointer;
  vertical-align: middle;
`;

const Language = ({ handleClick, current }) => {
  const Aurebesh = styled(LangButton)`
    font-family: "aurebesh";
    border-radius: 5px 0 0 0;
    background-color: ${current === 'aurebesh' && 'var(--new-hope-blue)'};
  `;

  const Mandalorian = styled(LangButton)`
    font-family: "mandalorian";
    background-color: ${current === 'mandalorian' && 'var(--new-hope-blue)'};
  `;

  const Darkkatarn = styled(LangButton)`
    font-family: "darkkatarn";
    background-color: ${current === 'darkkatarn' && 'var(--new-hope-blue)'};
  `;

  const English = styled(LangButton)`
    font-family: sans-serif;
    border-radius: 0 5px 0 0;
    background-color: ${current === 'sans-serif' && 'var(--new-hope-blue)'};
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
