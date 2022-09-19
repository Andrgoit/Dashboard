import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  justify-content: center;
`;

export const StyledItem = styled.li`
  width: 100px;
  display: inline-block;
  font-size: ${p => p.theme.fontSizes.l};
  padding: 5px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: #d1cbcb;
  cursor: pointer;
  color: black;
  /* position: relative;
  top: 0; */
  box-shadow: 0px 2px 2px black;

  :hover {
    background-color: bisque;
  }

  :active {
    top: 2px;
    box-shadow: none;
  }
`;
