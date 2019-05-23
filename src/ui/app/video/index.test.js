import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Video from './';

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
});
