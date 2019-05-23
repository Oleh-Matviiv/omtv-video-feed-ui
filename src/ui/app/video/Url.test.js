import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import Url from './Url';

describe('snapshots', () => {
  it('Title', () => {
    const wrapper = mount(
      <Url src="http://g.com/1.mp4" />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
