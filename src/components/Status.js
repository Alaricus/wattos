import React from 'react';
import styled from 'styled-components';
import images from '../images';

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const Image = styled.img`
  margin-top: 10%;
  max-width: 90%;
`;

const Spinner = styled(Image)`
  animation: spin 5s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Status = ({ type = 'notfound' }) => {
  let image = <Image src={images[type]} alt={type} />;
  let text = 'This is not the ship you are looking for ...';

  if (type === 'loading') {
    image = <Spinner src={images[type]} alt={type} />;
    text = 'Loading data...';
  }

  if (type === 'failed') {
    image = <Image src={images[type]} alt={type} />;
    text = 'Failed to load data.';
  }

  return (
    <Wrapper>
      {image}
      <h2>{text}</h2>
      { type === 'notfound' && <h3>... but it should be.</h3>}
    </Wrapper>
  );
};

export default Status;
