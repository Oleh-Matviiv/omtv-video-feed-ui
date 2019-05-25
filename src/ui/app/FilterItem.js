import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Div = styled.div.attrs({
  className: 'filter-item',
})`
  padding: .5rem;
  margin: 1rem .5rem 0;
  border: 1px solid #ccc;
  cursor: pointer;
  background: ${props => props.selected ? '#eee' : 'none'};
`;

const FilterItem = ({filter, handleFilterChange, selected}) => (
  <Div
    onClick={handleFilterChange}
    value={filter}
    selected={selected}
  >
    {filter}
  </Div>
);
FilterItem.propTypes = {
  filter: PropTypes.oneOf([
    'any', 'facebook', 'youtube', 'url',
  ]).isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default FilterItem;
