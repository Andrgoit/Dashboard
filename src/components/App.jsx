import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from './Box';

// import Header from './Header/Header';
import GreetBlock from './Header/GreetBlock/GreetBlock';
import EmailButton from 'components/Header/EmailButton/EmailButton';
import NotificationButton from './Header/NotificationButton/NotificationButton';
import SettingsButton from './Header/SettingsButton/SettingsButton';
import ThemeButton from './Header/ThemeButton/ThemeButton';
import ImageFinder from './ImageFinder/ImageFinder';
import PhoneBook from './PhoneBook/PhoneBook';
import Feedback from './Feedback/Feedback';
import Videoplayer from './Videoplayer/Videoplayer';
import Reader from './Reader/Reader';
// import Aside from './Aside/Aside';

export class App extends Component {
  state = {
    email: 44,
    notification: 12,
    name: 'Andrey',
    darkTheme: false,
    query: '',
  };

  changeTheme = () => {
    this.setState(prevState => ({
      darkTheme: !prevState.darkTheme,
    }));
  };

  render() {
    const { darkTheme, name, email, notification } = this.state;
    return (
      <Box
        display="flex"
        // width="100vw"
        minHeight="100vh"
        p={4}
        bg={darkTheme ? 'text' : 'body'}
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
            <GreetBlock name={name} darkTheme={darkTheme} />

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
          <Box display="block">
            <Box width="70%" p={4}>
              <ImageFinder />
            </Box>
            <Box width="25%" p={4}>
              <PhoneBook />
            </Box>
            <Box width="25%" p={4}>
              <Feedback />
            </Box>
            <Box width="70%" p={4}>
              <Videoplayer />
            </Box>
            <Box width="50%" p={4}>
              <Reader />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
