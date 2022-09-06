import css from 'components/NotificationButton/NotificationButton.module.css';

import { IoMdNotificationsOutline } from 'react-icons/io';

const NotificationButton = ({ notification }) => {
  return (
    <div className={css.notificationButton}>
      <span className={css.notificationButtonIcon}>
        <IoMdNotificationsOutline size="32px" />
      </span>
      {notification && (
        <span className={css.notificationButtonText}>{notification}</span>
      )}
    </div>
  );
};

export default NotificationButton;
