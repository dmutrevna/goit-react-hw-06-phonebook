import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem ';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/store/phoneBookSlice';
import { selectFilter } from 'redux/store/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const filteredContacts = filterContacts();

  return (
    <ul>
      {filteredContacts.map((contact, index) => {
        return <ContactItem {...contact} key={contact.id} index={index} />;
      })}
    </ul>
  );
};
