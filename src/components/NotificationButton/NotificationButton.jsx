import {
  StyledNotificationButton,
  StyledNotificationButtonIcon,
  StylednotificationButtonText,
} from 'components/NotificationButton/NotificationButton.styled';

import { IoMdNotificationsOutline } from 'react-icons/io';

const NotificationButton = ({ notification }) => {
  return (
    <StyledNotificationButton>
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
