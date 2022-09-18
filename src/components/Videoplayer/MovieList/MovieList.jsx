import { StyledList, StyledItem } from './MovieList.styled';

const MovieList = ({ videos, onClick }) => {
  let i = 0;
  return (
    <StyledList>
      {videos.map(({ id, link }) => {
        i += 1;
        return (
          <StyledItem key={id} onClick={() => onClick(link)}>
            Видео {i}
          </StyledItem>
        );
      })}
    </StyledList>
  );
};

export default MovieList;
