import { toast } from 'react-toastify';
import { Box } from 'components/Box';
import { Component } from 'react';
import PhoneBookSection from './PhoneBookSection/PhoneBookSection';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import PhoneBookButton from './PhoneBookButton/PhoneBookButton';
import SearchForm from './SearchForm/SearchForm';

class PhoneBook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
    isOpenPhoneBook: false,
  };

  togglePhoneBookButton = () => {
    this.setState(prevState => ({
      isOpenPhoneBook: !prevState.isOpenPhoneBook,
    }));
  };

  addContacts = data => {
    const { contacts } = this.state;

    const checkForDublicate = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (checkForDublicate) {
      return toast.info('Такое имя контакта уже существует');
    }
    if (contacts.length >= 5) {
      return toast.info('Достигнуто максимальное кол-во контактов...');
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  searchContact = value => {
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter, isOpenPhoneBook } = this.state;
    const {
      addContacts,
      deleteContacts,
      searchContact,
      togglePhoneBookButton,
    } = this;

    const normalizeFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return (
      <>
        <PhoneBookButton
          isOpen={isOpenPhoneBook}
          onClick={togglePhoneBookButton}
        />
        {isOpenPhoneBook && (
          <Box
            p={2}
            textAlign="center"
            borderRadius="6px"
            height="510px"
            bg="phoneBook.bgContainer"
          >
            <PhoneBookSection title="Phonebook">
              <ContactForm onSubmit={addContacts} />
            </PhoneBookSection>
            {contacts.length >= 1 && (
              <>
                <PhoneBookSection title="Search...">
                  <SearchForm onChange={searchContact} />
                </PhoneBookSection>
                <PhoneBookSection title="Contacts">
                  <Contacts
                    contacts={filteredContacts}
                    onClick={deleteContacts}
                  />
                </PhoneBookSection>
              </>
            )}
          </Box>
        )}
      </>
    );
  }
}

export default PhoneBook;
