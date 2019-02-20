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

const Aurebesh = styled(LangButton)`
  font-family: "aurebesh";
  border-radius: 5px 0 0 5px;
  background-color: ${props => props.current === 'aurebesh' && 'var(--sw-dust)'};
  color: ${props => props.current === 'aurebesh' && 'var(--sw-space)'};
`;

const Mandalorian = styled(LangButton)`
  font-family: "mandalorian";
  background-color: ${props => props.current === 'mandalorian' && 'var(--sw-dust)'};
  color: ${props => props.current === 'mandalorian' && 'var(--sw-space)'};
`;

const Darkkatarn = styled(LangButton)`
  font-family: "darkkatarn";
  background-color: ${props => props.current === 'darkkatarn' && 'var(--sw-dust)'};
  color: ${props => props.current === 'darkkatarn' && 'var(--sw-space)'};
`;

const English = styled(LangButton)`
  font-family: titillium;
  border-radius: 0 5px 5px 0;
  background-color: ${props => props.current === 'titillium' && 'var(--sw-dust)'};
  color: ${props => props.current === 'titillium' && 'var(--sw-space)'};
`;

const Language = ({ handleClick, current }) => (
  <Wrapper>
    <Aurebesh current={current} onClick={handleClick} data-lang="aurebesh">Aurebesh</Aurebesh>
    <Mandalorian current={current} onClick={handleClick} data-lang="mandalorian">Mandalorian</Mandalorian>
    <Darkkatarn current={current} onClick={handleClick} data-lang="darkkatarn">Katarn</Darkkatarn>
    <English current={current} onClick={handleClick} data-lang="titillium">English</English>
  </Wrapper>
);

export default Language;
