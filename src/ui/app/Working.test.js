import React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';

import Working, { Div } from './Working';

describe('snapshots', () => {
  it('Working - loading', () => {
    const wrapper = shallow(
      <Working loading={true} />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('Working - possibly error has happened', () => {
    const wrapper = shallow(
      <Working loading={false} />
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
