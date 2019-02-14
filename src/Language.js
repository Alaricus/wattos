import React, { Fragment } from 'react';
import styled from 'styled-components';

const LangButton = styled.button`
  font-size: 1.25rem;
  height: 2.5rem;
  padding: 0.4rem;
  margin-bottom: 1rem;
  border: 1px solid var(--new-hope-black);
  background-color: var(--new-hope-dust);
  cursor: pointer;
  vertical-align: middle;
`;

const Language = ({ handleClick, current }) => {
  const Aurebesh = styled(LangButton)`
    font-family: "aurebesh";
    border-style: solid none solid solid;
    border-radius: 5px 0 0 5px;
    color: ${current === 'aurebesh' && 'var(--new-hope-silver)'};
    background-color: ${current === 'aurebesh' && 'var(--new-hope-blue)'};
  `;

  const Mandalorian = styled(LangButton)`
    font-family: "mandalorian";
    border-style: solid none solid solid;
    color: ${current === 'mandalorian' && 'var(--new-hope-silver)'};
    background-color: ${current === 'mandalorian' && 'var(--new-hope-blue)'};
  `;

  const Darkkatarn = styled(LangButton)`
    font-family: "darkkatarn";
    border-style: solid none solid solid;
    color: ${current === 'darkkatarn' && 'var(--new-hope-silver)'};
    background-color: ${current === 'darkkatarn' && 'var(--new-hope-blue)'};
  `;

  const English = styled(LangButton)`
    font-family: sans-serif;
    border-style: solid solid solid solid;
    border-radius: 0 5px 5px 0;
    color: ${current === 'sans-serif' && 'var(--new-hope-silver)'};
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
