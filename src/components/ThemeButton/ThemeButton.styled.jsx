import styled from 'styled-components';

export const StyledThemeButton = styled.div`
  width: ${p => p.theme.space[5] + 16}px;
  height: ${p => p.theme.space[5] + 16}px;
  margin-right: ${p => p.theme.space[4] + 4}px;
  border-radius: ${p => p.theme.space[3] + 2}px;
  background-color: transparent;
  color: ${p => (p.darkTheme ? p.theme.colors.white : p.theme.colors.primary)};
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    /* background-color: ${p => p.theme.colors.secBgColorHeaderBtn}; */
    color: ${p => p.theme.colors.secColorHeaderBtn};
  }
`;

export const StyledThemeButtonIcon = styled.span`
  align-items: center;
`;

// export const StylednotificationButtonText = styled.span`
//   position: absolute;
//   top: ${p => p.theme.space[1] + 1}px;
//   right: ${p => p.theme.space[2] + 1}px;
//   padding: ${p => `${p.theme.space[1] + 1}px ${p.theme.space[2] + 1}px`};
//   font-size: ${p => p.theme.fontSizes.xs};
//   color: ${p => p.theme.colors.colorEmailNotification};
//   border-radius: ${p => p.theme.radii.sm};
//   background-color: ${p => p.theme.colors.bgColorNotification};
// `;
