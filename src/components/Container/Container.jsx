import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  background-color: #ebebeb;
  padding: 20px;
  display: flex;
`;

export default Container;
