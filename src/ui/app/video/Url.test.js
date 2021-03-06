import React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';

import Url, { Play } from './Url';

describe('snapshots', () => {
  it('Url', () => {
    const wrapper = shallow(
      <Url src="http://g.com/1.mp4" />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('Play', () => {
    const wrapper = mount(
      <Play width="200px" src="http://g.com/1.mp4" controls>
        children
      </Play>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
