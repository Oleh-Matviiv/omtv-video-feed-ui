import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Container = styled.article.attrs({
  className: 'video',
})`
  border: .1rem solid #efefef;
  margin-bottom: 2rem;
  display: grid;
  grid-template-areas: "title views"
                       "play play";
`;
export const Title = styled.div.attrs({
  className: 'video-title',
})`
  padding: 1rem;
  grid-area: "title";
`;
export const Views = styled.div.attrs({
  className: 'video-views',
})`
  padding: 1rem;
  grid-area: "views";
  text-align: right;
`;
export const Play = styled.div.attrs({
  className: 'video-play',
})`
  grid-area: "play";
`;

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
    <Play>{ video }</Play>
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
