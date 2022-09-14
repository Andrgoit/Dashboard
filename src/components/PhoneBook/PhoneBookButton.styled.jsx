import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${p => p.theme.colors.phoneBook.bgMainButton};
  width: 100%;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.md};
  position: relative;
  top: 0;
  padding: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  box-shadow: 0px 2px 2px black;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  :active {
    top: 2px;
    box-shadow: none;
  }
`;
