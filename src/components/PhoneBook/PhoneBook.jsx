import { toast } from 'react-toastify';
import { Box } from 'components/Box';
import { Component } from 'react';
import PhoneBookSection from './PhoneBookSection/PhoneBookSection';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import PhoneBookButton from './PhoneBookButton/PhoneBookButton';
import SearchForm from './SearchForm/SearchForm';

const KEY = 'contacts';

class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // name: '',
    // number: '',
    filter: '',
    isOpenPhoneBook: true,
  };

  componentDidMount() {
    try {
      const contactBook = JSON.parse(localStorage.getItem(KEY));
      if (contactBook !== null) {
        this.setState({ contacts: contactBook });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem(KEY, JSON.stringify(contacts));
    }
  }

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
    // if (contacts.length >= 5) {
    //   return toast.info('Достигнуто максимальное кол-во контактов...');
    // }
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
            minHeight="240px"
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
