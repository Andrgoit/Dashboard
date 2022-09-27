import styled from 'styled-components';

export const StyledSearchBlockForm = styled.form`
  padding: ${p => p.theme.space[2] + 1}px;
  border: ${p =>
    `${p.theme.borders.normal} ${p.theme.colors.searchBlock.border}`};
  border-radius: ${p => p.theme.radii.md};
  background-color: ${p => p.theme.colors.white};
  display: flex;
  align-items: center;
`;
export const StyledSearchBlockButton = styled.button`
  border: ${p => p.theme.borders.none};
  background-color: ${p => p.theme.colors.transparent};
  color: ${p => p.theme.colors.searchBlock.color};
  cursor: pointer;
`;

export const StyledSearchBlockInput = styled.input`
  border: ${p => p.theme.borders.none};
  outline: ${p => p.theme.borders.none};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.aside};
  width: ${p => p.theme.space[8] + 44}px;
`;

export const StyledContainer = styled.div`
  background-color: ${p => p.theme.colors.imageFinder.bgContainer};
  padding: ${p => p.theme.space[2]}px;
  /* border-bottom: ${p =>
    `${p.theme.borders.normal}.${p.theme.colors.black}`}; */
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: center;
`;

// .searchBlockForm {
//   padding: 5px;
//   border: 1px solid #e0e0e0;
//   border-radius: 6px;
//   background-color: #fff;
//   display: flex;
//   align-items: center;
// }

// .searchBlockButton {
//   border: none;
//   background-color: transparent;
//   color: #6c757d;
//   cursor: pointer;
// }

// .searchBlockInput {
//   border: none;
//   outline: none;
//   font-size: 16px;
//   line-height: 1.5;
//   width: 300px;
// }
