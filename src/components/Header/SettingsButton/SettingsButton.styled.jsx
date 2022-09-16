import styled from 'styled-components';

export const StyledSettingsButton = styled.div`
  width: ${p => p.theme.space[5] + 16}px;
  height: ${p => p.theme.space[5] + 16}px;
  margin-right: ${p => p.theme.space[4] + 4}px;
  border-radius: ${p => p.theme.space[3] + 2}px;
  color: ${p => (p.darkTheme ? p.theme.colors.white : p.theme.colors.black)};
  background-color: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.secBgColorHeaderBtn};
    color: ${p => p.theme.colors.secColorHeaderBtn};
  }
`;

export const StyledSettingsButtonIcon = styled.span`
  align-items: center;
`;

/* .emailButtonText {
  position: absolute;
  display: block;
  text-align: center;
  align-items: center;
  top: 3px;
  right: 5px;
  width: 16px;
  height: 16px; 
  padding: 3px 5px;
  font-size: 10px;
  color: #f2f2f2;
  border-radius: 4px;
  background-color: #0060af;
} */
