import { StyledButton } from './ImageFinderButton.styled';

const ImageFinderButton = ({ isOpen, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      Press to {isOpen ? 'close' : 'open'} Image Finder
    </StyledButton>
  );
};
export default ImageFinderButton;
