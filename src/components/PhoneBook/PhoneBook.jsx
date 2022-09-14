import PhoneBookButton from './PhoneBookButton';

const PhoneBook = ({ isOpenPhoneBook, onClick }) => {
  return (
    <>
      <PhoneBookButton isOpen={isOpenPhoneBook} onClick={onClick} />
    </>
  );
};

export default PhoneBook;
