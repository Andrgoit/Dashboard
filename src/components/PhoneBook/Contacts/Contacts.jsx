import React from 'react';
import { StyledList, StyledItem } from './Contacts.styled';

export default function Contacts({ contacts }) {
  return (
    <StyledList>
      {contacts.map(({ name, number, id }) => {
        return (
          <StyledItem key={id}>
            {name} : {number}
          </StyledItem>
        );
      })}
    </StyledList>
  );
}
