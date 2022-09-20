import { StyledContainer, StyledButton } from './ButtonsBlock.styled';

const ButtonsBlock = ({ current, total, onClick }) => {
  return (
    <StyledContainer>
      <StyledButton
        type="button"
        disabled={current === 1}
        onClick={() => onClick(-1)}
      >
        {' '}
        Назад{' '}
      </StyledButton>
      <StyledButton
        type="button"
        disabled={current === total}
        onClick={() => onClick(1)}
      >
        {' '}
        Вперед{' '}
      </StyledButton>
    </StyledContainer>
  );
};

export default ButtonsBlock;
