import React from 'react';
// import leftMenuList from 'components/LeftMenu/leftMenuList.json';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineCalendar,
  AiOutlineMail,
  AiOutlineContacts,
  AiOutlineWechat,
  AiOutlineFolder,
} from 'react-icons/ai';

import { RiLogoutBoxRLine } from 'react-icons/ri';

import {
  StyledLeftMenuContainer,
  StyledLeftMenuBtn,
  StyledLeftMenuIcon,
  StyledLeftMenuTitle,
} from 'components/Aside/Aside.styled';

const Aside = () => {
  return (
    <StyledLeftMenuContainer>
      <StyledLeftMenuBtn>
        <StyledLeftMenuIcon>
          <AiOutlineHome size="32px" />
        </StyledLeftMenuIcon>
        <StyledLeftMenuTitle>Dashboard</StyledLeftMenuTitle>
      </StyledLeftMenuBtn>

      <StyledLeftMenuBtn>
        <StyledLeftMenuIcon>
          <AiOutlineFundProjectionScreen size="32px" />
        </StyledLeftMenuIcon>
        <StyledLeftMenuTitle>Projects</StyledLeftMenuTitle>
      </StyledLeftMenuBtn>

      <StyledLeftMenuBtn>
        <StyledLeftMenuIcon>
          <AiOutlineCalendar size="32px" />
        </StyledLeftMenuIcon>
        <StyledLeftMenuTitle>Calendar</StyledLeftMenuTitle>
      </StyledLeftMenuBtn>

      <StyledLeftMenuBtn>
        <StyledLeftMenuIcon>
          <AiOutlineMail size="32px" />
        </StyledLeftMenuIcon>
        <StyledLeftMenuTitle>Email</StyledLeftMenuTitle>
      </StyledLeftMenuBtn>

      <StyledLeftMenuBtn>
        <StyledLeftMenuIcon>
          <AiOutlineContacts size="32px" />
        </StyledLeftMenuIcon>
        <StyledLeftMenuTitle>Contact</StyledLeftMenuTitle>
      </StyledLeftMenuBtn>

      <StyledLeftMenuBtn>
        <StyledLeftMenuIcon>
          <AiOutlineWechat size="32px" />
        </StyledLeftMenuIcon>
        <StyledLeftMenuTitle>Chat</StyledLeftMenuTitle>
      </StyledLeftMenuBtn>

      <StyledLeftMenuBtn>
        <StyledLeftMenuIcon>
          <AiOutlineFolder size="32px" />
        </StyledLeftMenuIcon>
        <StyledLeftMenuTitle>File Manager</StyledLeftMenuTitle>
      </StyledLeftMenuBtn>

      <StyledLeftMenuBtn>
        <StyledLeftMenuIcon>
          <RiLogoutBoxRLine size="32px" />
        </StyledLeftMenuIcon>
        <StyledLeftMenuTitle>Logout</StyledLeftMenuTitle>
      </StyledLeftMenuBtn>
    </StyledLeftMenuContainer>
  );
};

export default Aside;
