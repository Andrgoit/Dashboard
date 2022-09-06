import React, { Component } from 'react';
import Container from './Container/Container';
import BodyContainer from 'components/BodyContainer/BodyContainer';
import Header from './Header/Header';
import GreetBlock from './GreetBlock/GreetBlock';
import SearchBlock from './SearchBlock/SearchBlock';
import ButtonBlock from './ButtonBlock/ButtonBlock';
import EmailButton from 'components/EmailButton/EmailButton';
import NotificationButton from './NotificationButton/NotificationButton';
import SettingsButton from './SettingsButton/SettingsButton';
import LeftMenu from './LeftMenu/LeftMenu';

export class App extends Component {
  state = {
    email: 3,
    notification: 12,
  };

  render() {
    return (
      <Container>
        <LeftMenu />
        <BodyContainer>
          <Header>
            <GreetBlock />
            <SearchBlock />
            <ButtonBlock>
              <EmailButton email={this.state.email} />
              <NotificationButton notification={this.state.notification} />
              <SettingsButton />
              {/* <ProfileButton /> */}
            </ButtonBlock>
          </Header>
        </BodyContainer>
      </Container>
    );
  }
}
