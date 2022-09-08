import {
  StyledGreetBlockWrapper,
  StyledGreetBlockText,
} from 'components/GreetBlock/GreetBlock.styled';

const GreetBlock = ({ name }) => {
  return (
    <StyledGreetBlockWrapper>
      <StyledGreetBlockText>Hi, {name}</StyledGreetBlockText>
      <StyledGreetBlockText>
        Here's what's happening today.
      </StyledGreetBlockText>
    </StyledGreetBlockWrapper>
  );
};

export default GreetBlock;
