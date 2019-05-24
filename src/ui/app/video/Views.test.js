import React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';

import Views, { Div } from './Views';

describe('snapshots', () => {
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
