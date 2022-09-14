import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  StyledForm,
  StyledInput,
  Styledlabel,
  StyledButton,
} from './ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerChange = e => {
    console.log(e.target.value);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlerSubmitForm = e => {
    const { name, number } = this.state;
    const id = nanoid();
    e.preventDefault();
    this.props.onSubmit({ name, number, id });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const { handlerSubmitForm, handlerChange } = this;
    return (
      <>
        <StyledForm onSubmit={handlerSubmitForm}>
          <Styledlabel htmlFor="name">Name</Styledlabel>
          <StyledInput
            onChange={handlerChange}
            type="text"
            value={name}
            id="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Styledlabel htmlFor="name">Number</Styledlabel>
          <StyledInput
            type="tel"
            onChange={handlerChange}
            value={number}
            id="name"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
      </>
    );
  }
}
