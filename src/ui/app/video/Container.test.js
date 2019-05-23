import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import Container from './Container';

describe('snapshots', () => {
  it('Container', () => {
    const wrapper = mount(
      <Container>children</Container>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
