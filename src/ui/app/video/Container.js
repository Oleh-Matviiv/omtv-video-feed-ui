import React from 'react';
import styled from 'styled-components';

const Container = styled.article.attrs({
  className: 'video',
})`
  border: .1rem solid #efefef;
  margin-bottom: 2rem;
  display: grid;
  grid-template-areas: "title views"
                       "play play";
`;

export default Container;
