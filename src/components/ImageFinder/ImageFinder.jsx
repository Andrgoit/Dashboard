import React, { Component } from 'react';
import { Box } from 'components/Box';
import SearchBlock from './SearchBlock/SearchBlock';
import ImageFinderButton from 'components/ImageFinder/ImageFinderButton/ImageFinderButton';
import StyledList from 'components/ImageFinder/ImageFinderList/ImageFinderList';
import { apiRequest } from '../../utils/api-imageFinder';
import FirstLoading from './FirstLoading/FirstLoading';

class ImageFinder extends Component {
  state = {
    pictures: [],
    isOpenImageFinder: true, // открыт/закрыт окно с приложением
    query: '', //запрос в инпуте
    page: 1, //страница
    status: 'idle', // для применении стейт машины
  };
  // функция проверяет изменения пердыдущих  и "будущих" значений в стейте
  componentDidUpdate(prevProps, prevState) {
    const query = this.state.query;
    const prevQuery = prevState.query;
    const page = this.state.page;
    const prevPage = prevState.page;

    // сравнение
    if (query !== prevQuery || page !== prevPage) {
      this.setState({ status: 'pending' });

      try {
        apiRequest(query, page)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(
              new Error('Извините, такого изображения нет')
            );
          })
          .then(data => {
            this.setState(prev => ({
              pictures: [...prev.pictures, ...data.hits],
            }));
            this.setState({ status: 'resolved' });
          })
          .finally();
      } catch (error) {
        console.log(error);
      }
    }
  }

  toggleImageFinderButton = () => {
    this.setState(prevState => ({
      isOpenImageFinder: !prevState.isOpenImageFinder,
    }));
  };

  changeQuery = data => {
    this.setState({ query: data });
  };

  render() {
    const { isOpenImageFinder, status, pictures } = this.state;
    const { toggleImageFinderButton } = this;

    return (
      <>
        <ImageFinderButton
          isOpen={isOpenImageFinder}
          onClick={toggleImageFinderButton}
        />
        {isOpenImageFinder && (
          <Box height="500px" borderRadius="md">
            <SearchBlock onSubmit={this.changeQuery} />
            <Box
              height="100%"
              bg="imageFinder.bgContainer"
              p={4}
              overflow="scroll"
            >
              {status === 'idle' ? <FirstLoading /> : null}
              <StyledList pictures={pictures} />
            </Box>
          </Box>
        )}
      </>
    );
  }
}
export default ImageFinder;
