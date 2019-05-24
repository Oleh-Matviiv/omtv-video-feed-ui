import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Missing from './Missing';

export const Play = styled.iframe.attrs({
  className: 'video-play-youtube',
})`
  grid-area: play;
`;

const Youtube = ({ id }) => id ? (
  <Play
    width="100%"
    height="400px"
    src={ `https://www.youtube.com/embed/${id}` }
  />
) : <Missing />;
Youtube.propTypes = {
  id: PropTypes.string,
};

export default Youtube;
