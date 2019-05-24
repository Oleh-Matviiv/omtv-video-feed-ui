import React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';

import Missing, { Div } from './Missing';

describe('snapshots', () => {
  it('Missing', () => {
    const wrapper = shallow(
      <Missing />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('Div', () => {
    const wrapper = shallow(
      <Div>children</Div>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
