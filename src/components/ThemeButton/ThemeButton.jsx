import { BsSun, BsMoon } from 'react-icons/bs';

import { StyledThemeButton, StyledThemeButtonIcon } from './ThemeButton.styled';

const ThemeButton = ({ onClick, darkTheme }) => {
  console.log(darkTheme);
  return (
    <StyledThemeButton onClick={onClick}>
      <StyledThemeButtonIcon>
        {darkTheme ? <BsSun size="32px" /> : <BsMoon size="32px" />}
      </StyledThemeButtonIcon>
    </StyledThemeButton>
  );
};

export default ThemeButton;
