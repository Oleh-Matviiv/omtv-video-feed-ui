import React from 'react';
import styled from 'styled-components';

export const Div = styled.div.attrs({
  className: 'video-missing',
})`
  grid-area: play;
  background: #fafafa;
  display: flex;
  justify-content: center;
  padding: 7rem 0;
  color: #b4bbc1;
`;

const Missing = () => <Div>:/ video is missing</Div>;

export default Missing;
