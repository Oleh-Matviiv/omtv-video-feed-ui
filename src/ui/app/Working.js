import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Working = ({loading}) => (
  <Div>{
    loading ? 'loading videos...' : 'failed to load videos'
  }</Div>
);
Working.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Working;
