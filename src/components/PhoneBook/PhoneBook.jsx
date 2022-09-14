import PhoneBookButton from './PhoneBookButton';
import { Box } from 'components/Box';
import { Component } from 'react';
import PhoneBookSection from './PhoneBookSection/PhoneBookSection';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';

class PhoneBook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContacts = data => {
    console.log(data);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  render() {
    const { contacts } = this.state;
    const { addContacts } = this;
    const { isOpenPhoneBook, onClick } = this.props;
    return (
      <>
        <PhoneBookButton isOpen={isOpenPhoneBook} onClick={onClick} />
        {isOpenPhoneBook && (
          <Box
            p={2}
            textAlign="center"
            borderRadius="6px"
            height="500px"
            bg="phoneBook.bgContainer"
          >
            <PhoneBookSection title="Phonebook">
              <ContactForm onSubmit={addContacts} />
            </PhoneBookSection>
            <PhoneBookSection title="Contacts">
              <Contacts contacts={contacts} />
            </PhoneBookSection>
          </Box>
        )}
      </>
    );
  }
}

export default PhoneBook;
