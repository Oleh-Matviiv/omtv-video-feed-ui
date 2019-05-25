import React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';

import FilterItem, { Div } from './FilterItem';

describe('snapshots', () => {
  it('FilterItem', () => {
    const wrapper = shallow(
      <FilterItem
        filter="facebook"
        handleFilterChange={jest.fn()}
        selected={false}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('Div', () => {
    const wrapper = mount(
      <Div selected={false}>facebook</Div>
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('Div selected', () => {
    const wrapper = mount(
      <Div selected={true}>any</Div>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
