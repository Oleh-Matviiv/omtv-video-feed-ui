import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from './Container';
import Title from './Title';
import Views from './Views';
import Url from './Url';
import Youtube from './Youtube';

const Video = ({
  title = '',
  type = 'video',
  source,
  video,
  views,
}) => (
  <Container>
    <Title>{ title }</Title>
    <Views count={ views } />
    { source === "url" && <Url src={ video } /> }
    { source === "youtube" && <Youtube id={ video } /> }
  </Container>
);

Video.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['video']),
  source: PropTypes.oneOf([
    'url', 'youtube', 'facebook',
  ]).isRequired,
  video: PropTypes.string,
  views: PropTypes.number,
};

export default Video;
