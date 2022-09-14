import styled from 'styled-components';

export const StyledList = styled.ul`
  background-color: ${p => p.theme.colors.imageFinder.bgContainer};
  border-radius: ${p => p.theme.radii.md};
  min-height: 100%;
  margin: ${p => p.theme.space[0]};
  padding: ${p => p.theme.space[0]};
`;
