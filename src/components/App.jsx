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
import Aside from './Aside/Aside';

export class App extends Component {
  state = {
    email: 3,
    notification: 12,
    name: 'Andrey',
    isOpenImageFinder: false,
  };

  render() {
    return (
      <Container>
        <Aside />
        <BodyContainer>
          <Header>
            <GreetBlock name={this.state.name} />
            <SearchBlock />
            <ButtonBlock>
              <EmailButton email={this.state.email} />
              <NotificationButton notification={this.state.notification} />
              <SettingsButton />
              {/* <ProfileButton /> */}
            </ButtonBlock>
          </Header>
          <div className="apps"></div>
        </BodyContainer>
      </Container>
    );
  }
}
