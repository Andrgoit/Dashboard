import { StyledList } from './ImageFinderList.styled';
import ImageFinderItem from '../ImageFinderItem/ImageFinderItem';

const ImageFinderList = ({ pictures }) => {
  return (
    <StyledList>
      {pictures.map(({ id, largeImageURL, tags, webformatURL }) => {
        return (
          <ImageFinderItem
            key={id}
            largeImageURL={largeImageURL}
            tags={tags}
            webformatURL={webformatURL}
          />
        );
      })}
    </StyledList>
  );
};

export default ImageFinderList;
