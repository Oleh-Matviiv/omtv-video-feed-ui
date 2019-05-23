import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import Title from './Title';

describe('snapshots', () => {
  it('Title', () => {
    const wrapper = mount(
      <Title>title</Title>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
