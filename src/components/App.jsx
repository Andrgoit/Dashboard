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
    isOpenPhoneBook: false,
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
    return (
      <Box
        display="flex"
        height="100vh"
        p={4}
        bg={this.state.darkTheme ? 'text' : 'body'}
      >
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
            <GreetBlock
              name={this.state.name}
              darkTheme={this.state.darkTheme}
            />
            <SearchBlock
              onSubmit={this.changeQuery}
              isOpenImageFinder={this.state.isOpenImageFinder}
            />
            <Box display="flex" gridGap={4}>
              <EmailButton
                email={this.state.email}
                darkTheme={this.state.darkTheme}
              />
              <NotificationButton
                notification={this.state.notification}
                darkTheme={this.state.darkTheme}
              />
              <SettingsButton darkTheme={this.state.darkTheme} />
              <ThemeButton
                darkTheme={this.state.darkTheme}
                onClick={this.changeTheme}
              />
              {/* <ProfileButton /> */}
            </Box>
          </Box>
          <Box display="flex">
            <Box width="70%" p={4}>
              <ImageFinder
                isOpenImageFinder={this.state.isOpenImageFinder}
                onClick={this.toggleImageFinderButton}
              />
            </Box>
            <Box width="30%" p={4}>
              <PhoneBook
                isOpenPhoneBook={this.state.isOpenPhoneBook}
                onClick={this.togglePhoneBookButton}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
