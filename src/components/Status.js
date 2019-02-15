import React from 'react';
import styled from 'styled-components';
// import notfound from '../assets/notfound.png';
// import spinner from '../assets/spinner.png';
// import failed from '../assets/failed.png';

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

// const Spinner = styled.img`
//   margin-top: 10%;
//   animation: spin 2s linear infinite;
//   height: 10rem;
//   width: 10rem;

//   @keyframes spin {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
//   }
// `;

const Status = ({ type = 'notfound'}) => {
  // let image = notfound;
  let text = 'This is not the page you are looking for...';

  if (type === 'loading') {
    // image = spinner;
    text = 'Loading data...';
  }

  if (type === 'failed') {
    // image = failed;
    text = 'Failed to load data...';
  }

  return (
    <Wrapper>
      {
        // type === 'loading' && <Spinner src={image} alt={type}/>
      }
      <h2>{text}</h2>
    </Wrapper>
  );
};

export default Status;
