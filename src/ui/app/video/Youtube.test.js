import React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';

import Youtube, { Play } from './Youtube';

describe('snapshots', () => {
  it('Youtube', () => {
    const wrapper = shallow(
      <Youtube id="tgbNymZ7vqY" />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('Play', () => {
    const wrapper = mount(
      <Play width="200px" src="http://g.com/1.mp4">
        children
      </Play>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
