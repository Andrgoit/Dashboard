import css from 'components/SettingsButton/SettingsButton.module.css';

import { FiSettings } from 'react-icons/fi';

const SettingsButton = () => {
  return (
    <div className={css.settingButton}>
      <span className={css.settingButtonIcon}>
        <FiSettings size="32px" />
      </span>
    </div>
  );
};

export default SettingsButton;
