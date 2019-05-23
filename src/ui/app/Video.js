import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Video = ({
  title = '',
  type = 'video',
  source = 'unknown',
  video = 'video unavailable',
  views = 'no info',
}) => (
  <div>
    {title}
  </div>
);
Video.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['video']),
  source: PropTypes.oneOf([
    'facebook', 'youtube', 'url', 'unknown',
  ]),
  video: PropTypes.string,
  views: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Video;
