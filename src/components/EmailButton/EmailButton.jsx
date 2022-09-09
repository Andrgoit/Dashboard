import { AiOutlineMail } from 'react-icons/ai';

import {
  StyledEmailButton,
  StyledEmailButtonIcon,
  StyledEmailButtonText,
} from 'components/EmailButton/EmailButton.styled';

const EmailButton = ({ email, darkTheme }) => {
  return (
    <StyledEmailButton darkTheme={darkTheme}>
      <StyledEmailButtonIcon>
        <AiOutlineMail size="32px" />
      </StyledEmailButtonIcon>
      {email && <StyledEmailButtonText>{email}</StyledEmailButtonText>}
    </StyledEmailButton>
  );
};

export default EmailButton;
