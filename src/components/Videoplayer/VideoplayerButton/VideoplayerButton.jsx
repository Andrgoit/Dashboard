import { StyledButton } from './VideoplayerButton.styled';

const VideoplayerButton = ({ isOpen, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      Press to {isOpen ? 'close' : 'open'} Videoplayer
    </StyledButton>
  );
};
export default VideoplayerButton;
