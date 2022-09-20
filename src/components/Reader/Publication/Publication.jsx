import React from 'react';
import { StyledContainer, StyledTitle, StyledText } from './Publication.styled';

export default function Publication({ items, index }) {
  const item = items[index];
  return (
    <StyledContainer>
      <StyledTitle>{item.title}</StyledTitle>
      <StyledText>{item.text}</StyledText>
    </StyledContainer>
  );
}
