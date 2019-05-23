import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from './Container';
import Title from './Title';
import Views from './Views';
import Url from './Url';

const Video = ({
  title = '',
  type = 'video',
  source,
  video = 'video unavailable',
  views = 'no info',
}) => (
  <Container>
    <Title>{ title }</Title>
    <Views>{ views }</Views>
    { source === "url" && (
      <Url src={ video } />
    ) }
  </Container>
);

Video.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['video']),
  source: PropTypes.oneOf([
    'url', 'youtube', 'facebook',
  ]).isRequired,
  video: PropTypes.string,
  views: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Video;
