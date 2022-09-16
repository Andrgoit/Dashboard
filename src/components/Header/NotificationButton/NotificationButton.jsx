import {
  StyledNotificationButton,
  StyledNotificationButtonIcon,
  StylednotificationButtonText,
} from 'components/Header/NotificationButton/NotificationButton.styled';

import { IoMdNotificationsOutline } from 'react-icons/io';

const NotificationButton = ({ notification, darkTheme }) => {
  return (
    <StyledNotificationButton darkTheme={darkTheme}>
      <StyledNotificationButtonIcon>
        <IoMdNotificationsOutline size="32px" />
      </StyledNotificationButtonIcon>
      {notification && (
        <StylednotificationButtonText>
          {notification}
        </StylednotificationButtonText>
      )}
    </StyledNotificationButton>
  );
};

export default NotificationButton;
