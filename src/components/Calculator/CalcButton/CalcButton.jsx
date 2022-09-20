import { StyledButton } from './CalcButton.styled';

const CalcButton = ({ isOpen, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      Press to {isOpen ? 'close' : 'open'} Calculator
    </StyledButton>
  );
};
export default CalcButton;
