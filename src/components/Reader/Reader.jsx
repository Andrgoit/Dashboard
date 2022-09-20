import { Component } from 'react';
import { Box } from 'components/Box';
import ReaderButton from './ReaderButton/ReaderButton';
import items from './publications.json';
import ButtonsBlock from './ButtonsBlock/ButtonsBlock';
import ProgressBar from './ProgressBar/ProgressBar';
import Publication from './Publication/Publication';

class Reader extends Component {
  state = {
    isOpenReader: true,
    index: 0,
  };

  toggleReaderButton = () => {
    this.setState(prevState => ({
      isOpenReader: !prevState.isOpenReader,
    }));
  };

  changeIndex = value => {
    this.setState(prev => ({ index: prev.index + value }));
  };

  render() {
    const { isOpenReader, index } = this.state;
    const { toggleReaderButton, changeIndex } = this;
    const totalItems = items.length;

    return (
      <>
        <ReaderButton onClick={toggleReaderButton} isOpen={isOpenReader} />
        {isOpenReader && (
          <Box
            p={2}
            textAlign="center"
            borderRadius="6px"
            maxHeight="600px"
            bg="reader.bgContainer"
          >
            <ButtonsBlock
              current={index + 1}
              onClick={changeIndex}
              total={totalItems}
            />
            <ProgressBar index={index + 1} total={totalItems} />
            <Publication items={items} index={index} />
          </Box>
        )}
      </>
    );
  }
}

export default Reader;
