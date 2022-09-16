import React from 'react';
import {
  StyledContainer,
  StyledTitle,
  StyledChildrenContainer,
} from './Section.styled';

export default function Section({ title, children }) {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledChildrenContainer>{children}</StyledChildrenContainer>
    </StyledContainer>
  );
}
