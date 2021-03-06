import React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';

import Menu, { Nav, Filters } from './Menu';

describe('snapshots', () => {
  it('Menu', () => {
    const wrapper = shallow(
      <Menu
        filter="youtube"
        handleFilterChange={jest.fn()}
      >menu itesm</Menu>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Nav', () => {
    const wrapper = mount(
      <Nav>children</Nav>
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('Filters', () => {
    const wrapper = mount(
      <Filters>filters here</Filters>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
