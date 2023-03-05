// import { useState } from 'react';
import { Form } from './Form/Form.jsx';
import ContactList from './ContactList/ContactList.jsx';
import Filter from './Filter/Filter.jsx';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  );
};
