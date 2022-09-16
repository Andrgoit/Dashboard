import { BsSun, BsMoon } from 'react-icons/bs';

import { StyledThemeButton, StyledThemeButtonIcon } from './ThemeButton.styled';

const ThemeButton = ({ onClick, darkTheme }) => {
  return (
    <StyledThemeButton onClick={onClick} darkTheme={darkTheme}>
      <StyledThemeButtonIcon>
        {darkTheme ? <BsSun size="32px" /> : <BsMoon size="32px" />}
      </StyledThemeButtonIcon>
    </StyledThemeButton>
  );
};

export default ThemeButton;
