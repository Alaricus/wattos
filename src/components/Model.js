import React, { memo } from 'react';
import styled from 'styled-components';

const StyledIframe = styled.iframe`
  display: block;
  background-size: cover;
  width: 100%;
  height: 18rem;

  background-image: radial-gradient(var(--sw-blue) 1%, var(--sw-space) 40%, transparent 55%);

  @media only screen and (min-width: 768px) {
    width: 60%;
    height: 25rem;
    border-radius: 5px;
  }
`;

const Model = ({ id, id3d }) => (
  <StyledIframe
    title={id}
    frameBorder="0"
    seamless
    src={`https://p3d.in/e/${id3d}+spin+load+bg-none+nopan+nozoom+norotate+controls,border,loader-hidden`}
  />
);

function areEqual(prevProps, nextProps) {
  return true;
}

export default memo(Model, areEqual);
