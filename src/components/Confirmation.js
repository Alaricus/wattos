import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
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
  width: 92%;
  left: 50%;
  transform: translate(-50%, 0);

  @media only screen and (min-width: 768px) {
    top: 25%;
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

const Confirm = styled.button`
  color: var(--sw-silver);
  background-color: var(--sw-blue);
  font-size: 1.2rem;
  height: 3rem;
  padding: 0.1rem 0.4rem;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  width: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 20rem;
    margin-top: 2rem;
  }
`;

const Confirmation = ({ name, price, history }) => {
  const confirm = () => {
    history.push('/');
  };

  return (
    <Block>
      <Modal>
        <h2>Congratulations!</h2>
        <p>
          The
          {name}
          {' '}
          is now
          {price ? 'yours' : 'being held for you'}
          !
        </p>
        {price && (
        <p>
          {price}
          {' '}
          have been removed from your account.
        </p>
        )}
        <p>Pick up your new ship at our Mos Espa location.</p>
        {!price && <p>(We will tell you the price when you get here.)</p>}
        <Confirm onClick={confirm}>OK</Confirm>
      </Modal>
    </Block>
  );
};

export default Confirmation;
