import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import Videos, { Main } from './Videos';

describe('snapshots', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <Videos>
        videos list
      </Videos>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
