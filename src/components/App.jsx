import React from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import {
  AppContainer,
  TitleContacts,
  TitlePhone,
} from './ContactForm/ContactForm.styled';

export const App = () => {
  return (
    <AppContainer>
      <TitlePhone>Phonebook</TitlePhone>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
    </AppContainer>
  );
};
