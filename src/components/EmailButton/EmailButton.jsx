import { AiOutlineMail } from 'react-icons/ai';

import {
  StyledEmailButton,
  StyledEmailButtonIcon,
  StyledEmailButtonText,
} from 'components/EmailButton/EmailButton.styled';

const EmailButton = ({ email }) => {
  return (
    <StyledEmailButton>
      <StyledEmailButtonIcon>
        <AiOutlineMail size="32px" />
      </StyledEmailButtonIcon>
      {email && <StyledEmailButtonText>{email}</StyledEmailButtonText>}
    </StyledEmailButton>
  );
};

export default EmailButton;
