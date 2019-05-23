import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import Play from './Play';

describe('snapshots', () => {
  it('Play', () => {
    const wrapper = mount(
      <Play>children</Play>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
