import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from './Box';

// import Header from './Header/Header';
import GreetBlock from './GreetBlock/GreetBlock';
import SearchBlock from './SearchBlock/SearchBlock';

import EmailButton from 'components/EmailButton/EmailButton';
import NotificationButton from './NotificationButton/NotificationButton';
import SettingsButton from './SettingsButton/SettingsButton';
import ThemeButton from './ThemeButton/ThemeButton';
import ImageFinder from './ImageFinder/ImageFinder';
import PhoneBook from './PhoneBook/PhoneBook';
// import Aside from './Aside/Aside';

export class App extends Component {
  state = {
    email: 44,
    notification: 12,
    name: 'Andrey',
    isOpenImageFinder: false,
    isOpenPhoneBook: true,
    darkTheme: false,
    query: '',
  };

  changeTheme = () => {
    this.setState(prevState => ({
      darkTheme: !prevState.darkTheme,
    }));
  };

  toggleImageFinderButton = () => {
    this.setState(prevState => ({
      isOpenImageFinder: !prevState.isOpenImageFinder,
    }));
  };

  togglePhoneBookButton = () => {
    this.setState(prevState => ({
      isOpenPhoneBook: !prevState.isOpenPhoneBook,
    }));
  };

  changeQuery = data => {
    this.setState({ query: data });
  };

  render() {
    const {
      darkTheme,
      name,
      email,
      notification,
      isOpenImageFinder,
      isOpenPhoneBook,
    } = this.state;
    return (
      <Box display="flex" height="100vh" p={4} bg={darkTheme ? 'text' : 'body'}>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* <Aside /> */}
        <Box ml={4} width="100%">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderBottom="1px solid #e0e0e0"
          >
            <GreetBlock name={name} darkTheme={darkTheme} />
            <SearchBlock
              onSubmit={this.changeQuery}
              isOpenImageFinder={isOpenImageFinder}
            />
            <Box display="flex" gridGap={4}>
              <EmailButton email={email} darkTheme={darkTheme} />
              <NotificationButton
                notification={notification}
                darkTheme={darkTheme}
              />
              <SettingsButton darkTheme={darkTheme} />
              <ThemeButton darkTheme={darkTheme} onClick={this.changeTheme} />
              {/* <ProfileButton /> */}
            </Box>
          </Box>
          <Box display="flex">
            <Box width="70%" p={4}>
              <ImageFinder
                isOpenImageFinder={isOpenImageFinder}
                onClick={this.toggleImageFinderButton}
              />
            </Box>
            <Box width="20%" p={4}>
              <PhoneBook
                isOpenPhoneBook={isOpenPhoneBook}
                onClick={this.togglePhoneBookButton}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
