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

export const formatCount = (count) => {
  const b = count / 1000000000;
  const m = count / 1000000;
  const k = count / 1000;
  if (b > 1) return `${ Math.trunc(b * 10) / 10 }B`;
  if (m > 1) return `${ Math.trunc(m * 10) / 10 }M`;
  if (k > 1) return `${ Math.trunc(k * 10) / 10 }K`;
  return `${count}`;
};

const Views = ({ count = 0 }) => (
  <Div>
    { count > 0 ? formatCount(count) + ' views' : '' }
  </Div>
);
Views.propTypes = {
  count: PropTypes.number,
};

export default Views;
