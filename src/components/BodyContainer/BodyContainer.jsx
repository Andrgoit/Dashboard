import React from 'react';
import styled from 'styled-components';

const BodyContainer = ({ children }) => {
  return <StyledBodyContainer>{children}</StyledBodyContainer>;
};

export default BodyContainer;

const StyledBodyContainer = styled.div`
  margin-left: 20px;
  width: 100%;
`;
