// import styled from 'styled-components';
import css from 'components/EmailButton/EmailButton.module.css';

import { AiOutlineMail } from 'react-icons/ai';

const EmailButton = ({ email }) => {
  return (
    <div className={css.emailButton}>
      <span className={css.emailButtonIcon}>
        <AiOutlineMail size="32px" />
      </span>
      {email && <span className={css.emailButtonText}>{email}</span>}
    </div>
  );
};

export default EmailButton;
