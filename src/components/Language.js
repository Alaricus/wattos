import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  box-shadow: 0 0 20px 5px #000000;
`;

const LangButton = styled.button`
  font-size: 1rem;
  height: 1.8rem;
  padding: 0.1rem 0.4rem;
  border: none;

  color: var(--sw-silver);
  background-color: var(--sw-blue);
  cursor: pointer;
  vertical-align: middle;
`;

const Language = ({ handleClick, current }) => {
  const Aurebesh = styled(LangButton)`
    font-family: "aurebesh";
    border-radius: 5px 0 0 5px;
    background-color: ${current === 'aurebesh' && 'var(--sw-dust)'};
    color: ${current === 'aurebesh' && 'var(--sw-space)'};
  `;

  const Mandalorian = styled(LangButton)`
    font-family: "mandalorian";
    background-color: ${current === 'mandalorian' && 'var(--sw-dust)'};
    color: ${current === 'mandalorian' && 'var(--sw-space)'};
  `;

  const Darkkatarn = styled(LangButton)`
    font-family: "darkkatarn";
    background-color: ${current === 'darkkatarn' && 'var(--sw-dust)'};
    color: ${current === 'darkkatarn' && 'var(--sw-space)'};
  `;

  const English = styled(LangButton)`
    font-family: titillium;
    border-radius: 0 5px 5px 0;
    background-color: ${current === 'titillium' && 'var(--sw-dust)'};
    color: ${current === 'titillium' && 'var(--sw-space)'};
  `;

  return (
    <div>
      <Wrapper>
        <Aurebesh
          type="button"
          onClick={handleClick}
          data-lang="aurebesh"
        >
          Aurebesh
        </Aurebesh>
        <Mandalorian onClick={handleClick} data-lang="mandalorian">Mandalorian</Mandalorian>
        <Darkkatarn onClick={handleClick} data-lang="darkkatarn">Katarn</Darkkatarn>
        <English onClick={handleClick} data-lang="titillium">English</English>
      </Wrapper>
    </div>
  );
};

export default Language;
