import styled from 'styled-components';

export const StyledNotificationButton = styled.div`
  width: ${p => p.theme.space[5] + 16}px;
  height: ${p => p.theme.space[5] + 16}px;
  margin-right: ${p => p.theme.space[4] + 4}px;
  border-radius: ${p => p.theme.space[3] + 2}px;
  color: ${p => (p.darkTheme ? p.theme.colors.white : p.theme.colors.black)};
  background-color: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.secBgColorHeaderBtn};
    color: ${p => p.theme.colors.secColorHeaderBtn};
  }
`;

export const StyledNotificationButtonIcon = styled.span`
  align-items: center;
`;

export const StylednotificationButtonText = styled.span`
  position: absolute;
  top: ${p => p.theme.space[1] + 1}px;
  right: ${p => p.theme.space[2] + 1}px;
  padding: ${p => `${p.theme.space[1] + 1}px ${p.theme.space[2] + 1}px`};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.colorEmailNotification};
  border-radius: ${p => p.theme.radii.sm};
  background-color: ${p => p.theme.colors.bgColorNotification};
`;

//=================================================

// .notificationButtonText {
//   position: absolute;
//   top: 3px;
//   right: 5px;
//   /* width: 16px;
//   height: 16px; */
//   padding: 3px 5px;
//   font-size: 10px;
//   color: #f2f2f2;
//   border-radius: 4px;
//   background-color: #e50000;
// }

// .notificationButton {
//   width: 48px;
//   height: 48px;
//   background-color: transparent;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   margin-right: 20px;
//   border-radius: 10px;
// }

// .notificationButtonIcon {
//   align-items: center;
// }

// .notificationButton:hover {
//   background-color: rgba(51, 102, 255, 0.2);
//   color: #3366ff;
// }
