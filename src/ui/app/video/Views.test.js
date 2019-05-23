import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import Views from './Views';

describe('snapshots', () => {
  it('Views', () => {
    const wrapper = mount(
      <Views>2345</Views>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
