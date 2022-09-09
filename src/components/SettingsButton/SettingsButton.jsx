import {
  StyledSettingsButton,
  StyledSettingsButtonIcon,
} from 'components/SettingsButton/SettingsButton.styled';

import { FiSettings } from 'react-icons/fi';

const SettingsButton = ({ darkTheme }) => {
  return (
    <StyledSettingsButton darkTheme={darkTheme}>
      <StyledSettingsButtonIcon>
        <FiSettings size="32px" />
      </StyledSettingsButtonIcon>
    </StyledSettingsButton>
  );
};

export default SettingsButton;
