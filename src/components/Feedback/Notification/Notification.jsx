import React from 'react';
import { StyledMessage } from './Notification.styled';

export default function Notification({ message }) {
  return <StyledMessage>{message}</StyledMessage>;
}
