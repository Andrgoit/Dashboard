import React from 'react';
import { StyledButton, StyledButtonContainer } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <StyledButtonContainer>
      {options.map(option => {
        return (
          <StyledButton
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </StyledButton>
        );
      })}
    </StyledButtonContainer>
  );
}
