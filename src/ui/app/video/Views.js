import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Div = styled.div.attrs({
  className: 'video-views',
})`
  padding: 1rem;
  grid-area: views;
  text-align: right;
`;

const Views = ({ count = 0 }) => (
  <Div>
    { count > 0 ? count + ' views' : '' }
  </Div>
);
Views.propTypes = {
  count: PropTypes.number,
};

export default Views;
