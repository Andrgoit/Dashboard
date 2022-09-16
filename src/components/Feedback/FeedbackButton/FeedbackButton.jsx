import { StyledButton } from './FeedbackButton.styled';

const FeedbackButton = ({ isOpen, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      Press to {isOpen ? 'close' : 'open'} Feedback
    </StyledButton>
  );
};
export default FeedbackButton;
