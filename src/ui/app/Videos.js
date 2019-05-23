import React from 'react';
import styled from 'styled-components';

const Main = styled.main.attrs({
  className: 'videos',
})`
  @media screen and (max-width: 1199px) {
    padding: 2rem 0;
  }
  @media screen and (min-width: 1200px) {
    padding: 2rem 4rem;
  }
`;

const Videos = ({ children }) => <Main>{ children }</Main>;

export default Videos;
