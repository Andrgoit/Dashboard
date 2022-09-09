import { BsSun, BsMoon } from 'react-icons/bs';

import {
  StyledThemeButton,
  StyledNotificationButtonIcon,
} from './ThemeButton.styled';

const ThemeRutton = ({ onClick, darkTheme }) => {
  return (
    <StyledThemeButton onClick={onClick}>
      <StyledNotificationButtonIcon>
        {darkTheme ? <BsSun size="32px" /> : <BsMoon size="32px" />}
      </StyledNotificationButtonIcon>
    </StyledThemeButton>
  );
};

export default ThemeRutton;
