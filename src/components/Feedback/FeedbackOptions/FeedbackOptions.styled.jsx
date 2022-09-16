import styled from 'styled-components';

export const StyledButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const StyledButton = styled.button`
  font-size: ${p => p.theme.fontSizes.l};
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 0px 2px 2px black;
  :hover {
    background-color: #3680ee;
    color: #fff;
    :active {
      box-shadow: none;
      background-color: #ee7777;
    }
  }
`;
