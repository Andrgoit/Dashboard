import styled from 'styled-components';
import ReactPlayer from 'react-player';

export const PlayerWrapper = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100%;
`;

export const StyledPlayer = styled(ReactPlayer)`
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: center;
`;
