import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${p => p.theme.colors.imageFinder.bgMainButton};
  width: 100%;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.md};
  position: relative;
  top: 0;
  margin-bottom: ${p => p.theme.space[2]};
  box-shadow: 0px 2px 2px black;
  font-size: ${p => p.theme.fontSizes.l};
  :active {
    top: 2px;
    box-shadow: none;
  }
`;
