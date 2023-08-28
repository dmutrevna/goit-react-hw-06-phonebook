import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { getContactsThunk } from 'redux/store/operations';

import {
  AppContainer,
  TitleContacts,
  TitlePhone,
} from './ContactForm/ContactForm.styled';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

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
