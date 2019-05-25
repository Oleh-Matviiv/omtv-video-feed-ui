import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FilterItem from './FilterItem';

export const Nav = styled.nav.attrs({
  className: 'menu',
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  color: #b4bbc1;
  padding: 1rem;
  border-bottom: .1rem solid #efefef;
`;
export const Filters = styled.div.attrs({
  className: 'filters',
})`
  display: flex;
`;

const filters = ['any', 'facebook', 'youtube', 'url'];

const Menu = ({filter, handleFilterChange}) => (
  <Nav>
    VIDEO FEED
    <Filters>{filters.map(
      f => <FilterItem
             filter={f}
             handleFilterChange={handleFilterChange}
             selected={f === filter}
             key={f}
           />
    )}</Filters>
  </Nav>
);
Menu.propTypes = {
  filter: PropTypes.oneOf([
    'any', 'facebook', 'youtube', 'url',
  ]).isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Menu;
