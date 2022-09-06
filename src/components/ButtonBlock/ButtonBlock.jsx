import styled from 'styled-components';

const ButtonBlock = ({ children }) => {
  return <StyledButtonBlock>{children}</StyledButtonBlock>;
};

export default ButtonBlock;

const StyledButtonBlock = styled.div`
  display: flex;
`;
