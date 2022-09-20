import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

export const StyledButton = styled.button`
  font-size: 16px;
  padding: 10px;
  border: ${p => (p.disabled ? 'none' : '1px solid #000')};
  border-radius: ${p => p.theme.radii.md};
  background-color: ${p => (p.disabled ? 'none' : p.theme.colors.primary)};
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
  box-shadow: ${p => (p.disabled ? 'none' : '0px 2px 2px black')};

  :hover:not(:disabled) {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.white};
  }
  :active {
    box-shadow: none;
  }
`;
