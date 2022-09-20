import { StyledContainer, StyledProgress } from './ProgressBar.styled';

const ProgressBar = ({ total, index }) => {
  return (
    <StyledContainer>
      <StyledProgress>
        Статья {index} из {total}
      </StyledProgress>
      <input type="range" control="none" value={index} min="1" max={total} />
    </StyledContainer>
  );
};

export default ProgressBar;
