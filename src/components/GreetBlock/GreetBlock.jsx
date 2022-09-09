import {
  StyledGreetBlockWrapper,
  StyledGreetBlockText,
} from 'components/GreetBlock/GreetBlock.styled';

const GreetBlock = data => {
  console.log(data);
  return (
    <StyledGreetBlockWrapper>
      <StyledGreetBlockText>Hi, {data.name}</StyledGreetBlockText>
      <StyledGreetBlockText>
        Here's what's happening today.
      </StyledGreetBlockText>
    </StyledGreetBlockWrapper>
  );
};

export default GreetBlock;
