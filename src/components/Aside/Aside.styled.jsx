import styled from 'styled-components';

export const StyledLeftMenuContainer = styled.div`
  padding: ${p => p.theme.space[4]}px;
  width: ${p => p.theme.space[8] - 56}px;
  border-radius: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.bgcAside};
`;

export const StyledLeftMenuBtn = styled.button`
  display: flex;
  align-items: center;
  padding: ${p => `${p.theme.space[4]}px ${p.theme.space[4] + 4}px`};
  background-color: ${p => p.theme.colors.transparent};
  border-radius: ${p => p.theme.space[3]}px;
  width: 100%;
  border: ${p => p.theme.borders.none};

  :hover {
    background-color: ${p => p.theme.colors.secBgColorAsideBtn};
    color: ${p => p.theme.colors.white};
  }
`;

export const StyledLeftMenuIcon = styled.span`
  margin-right: ${p => p.theme.space[4]}px;
`;

export const StyledLeftMenuTitle = styled.p`
  font-size: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.preBold};
  line-height: ${p => p.theme.lineHeights.aside};
`;
