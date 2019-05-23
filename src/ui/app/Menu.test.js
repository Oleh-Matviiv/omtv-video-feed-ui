import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import Menu from './Menu';

describe('snapshots', () => {
  it('renders correclty', () => {
    const wrapper = mount(
      <Menu />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
