import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';

import Video, { Container, Title, Views, Play } from './Video';

describe('snapshots', () => {
  it('Video url', () => {
    const wrapper = shallow(
      <Video
        title="url based video"
        source="url"
        video="http://g.com/1.mp4"
        views={3445}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('Video youtube', () => {
    const wrapper = shallow(
      <Video
        title="youtube based video"
        source="youtube"
        video="Y34fdvsf43"
        views={214526}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('Video facebook', () => {
    const wrapper = shallow(
      <Video
        title="facebook based video"
        source="facebook"
        video="F34fdvsf43"
        views={56789}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('Container', () => {
    const wrapper = mount(
      <Container>children</Container>
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('Title', () => {
    const wrapper = mount(
      <Title>title</Title>
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('Views', () => {
    const wrapper = mount(
      <Views>24341</Views>
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('Play', () => {
    const wrapper = mount(
      <Play>children</Play>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
