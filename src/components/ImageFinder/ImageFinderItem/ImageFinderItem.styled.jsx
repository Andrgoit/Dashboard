import styled from 'styled-components';

export const StyledItem = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  width: calc(100% / 4);
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    scale: 1.2;
  }
`;

export const StyledImg = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  height: 100px;
`;
