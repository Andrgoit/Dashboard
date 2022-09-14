import {
  StyledGreetBlockWrapper,
  StyledGreetBlockText,
} from 'components/GreetBlock/GreetBlock.styled';

const GreetBlock = ({ name, darkTheme }) => {
  return (
    <StyledGreetBlockWrapper>
      <StyledGreetBlockText darkTheme={darkTheme}>
        Hi, {name}
      </StyledGreetBlockText>
      {/* <StyledGreetBlockText darkTheme={darkTheme}>
        Here's what's happening today.
      </StyledGreetBlockText> */}
    </StyledGreetBlockWrapper>
  );
};

export default GreetBlock;
