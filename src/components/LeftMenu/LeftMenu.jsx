import React from 'react';
import styled from 'styled-components';
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

const StyledLeftMenuContainer = styled.div`
  padding: 20px;
  width: 280px;
  border-radius: 10px;
  background-color: rgba(51, 102, 255, 0.1);
`;

const StyledLeftMenuBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 16px 20px 16px 17px;
  background-color: transparent;
  border-radius: 6px;
  width: 100%;
  border: none;

  :hover {
    background-color: #3366ff;
    color: #ffffff;
  }
`;

const StyledLeftMenuIcon = styled.span`
  margin-right: 16px;
`;

const StyledLeftMenuTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1, 5;
`;
