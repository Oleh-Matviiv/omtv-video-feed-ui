import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Missing from './Missing';

export const Play = styled.iframe.attrs({
  className: 'video-play-facebook',
})`
  grid-area: play;
`;

const Facebook = ({ id }) => id ? (
  <Play
    width="100%"
    height="400px"
    src={ `https://www.facebook.com/video/embed?video_id=${id}` }
  />
) : <Missing />;
Facebook.propTypes = {
  id: PropTypes.string,
};

export default Facebook;
