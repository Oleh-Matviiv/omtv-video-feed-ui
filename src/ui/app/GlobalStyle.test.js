import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import GlobalStyle from './GlobalStyle';

describe('snapshots', () => {
  it('renders correclty', () => {
    const wrapper = mount(
      <GlobalStyle />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
