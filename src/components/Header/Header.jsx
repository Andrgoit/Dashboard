import styled from 'styled-components';

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
`;
