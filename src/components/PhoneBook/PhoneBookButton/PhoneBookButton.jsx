import { StyledButton } from './PhoneBookButton.styled';

const PhoneBookButton = ({ isOpen, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      Press to {isOpen ? 'close' : 'open'} PhoneBook
    </StyledButton>
  );
};
export default PhoneBookButton;
