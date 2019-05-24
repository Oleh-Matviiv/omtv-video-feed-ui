import React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';

import Views, { Div, formatCount } from './Views';

describe('snapshots', () => {
  it('formatCount', () => {
    expect(formatCount(123)).toEqual('123');
    expect(formatCount(1123)).toEqual('1.1K');
    expect(formatCount(4231123)).toEqual('4.2M');
    expect(formatCount(9834231123)).toEqual('9.8B');
  });
  it('Div', () => {
    const wrapper = mount(
      <Div>children</Div>
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('Views', () => {
    const wrapper = shallow(
      <Views count={ 2345 } />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('Views - count undefined', () => {
    const wrapper = shallow(
      <Views />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
