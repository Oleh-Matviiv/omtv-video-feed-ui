import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Play = styled.video.attrs({
  className: 'video-play',
})`
  grid-area: play;
`;

const Url = ({ src }) => (
  <Play width="100%" src={ src } controls>
    Your browser doesn't support HTML5 video.
  </Play>
);
Url.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Url;
