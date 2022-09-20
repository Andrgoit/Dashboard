import { StyledButton } from './ReaderButton.styled';

const ReaderButton = ({ isOpen, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      Press to {isOpen ? 'close' : 'open'} Reader
    </StyledButton>
  );
};
export default ReaderButton;
