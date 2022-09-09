import React, { Component } from 'react';
import { Box } from './Box';

import Header from './Header/Header';
import GreetBlock from './GreetBlock/GreetBlock';
import SearchBlock from './SearchBlock/SearchBlock';

import EmailButton from 'components/EmailButton/EmailButton';
import NotificationButton from './NotificationButton/NotificationButton';
import SettingsButton from './SettingsButton/SettingsButton';
import ThemeButton from './ThemeButton/ThemeButton';
import Aside from './Aside/Aside';

export class App extends Component {
  state = {
    email: 3,
    notification: 12,
    name: 'Andrey',
    isOpenImageFinder: false,
    darkTheme: false,
  };

  changeTheme = () => {
    this.setState(prevState => ({
      darkTheme: !prevState.darkTheme,
    }));
  };

  render() {
    return (
      <Box
        display="flex"
        height="100vh"
        p={4}
        bg={this.state.darkTheme ? 'text' : 'body'}
      >
        <Aside />
        <Box ml={4} width="100%">
          <Header>
            <GreetBlock name={this.state.name} />
            <SearchBlock />
            <Box display="flex" gridGap={4}>
              <EmailButton email={this.state.email} />
              <NotificationButton notification={this.state.notification} />
              <SettingsButton />
              <ThemeButton
                darkTheme={this.state.darkTheme}
                onClick={this.changeTheme}
              />
              {/* <ProfileButton /> */}
            </Box>
          </Header>
          <div className="apps"></div>
        </Box>
      </Box>
    );
  }
}
