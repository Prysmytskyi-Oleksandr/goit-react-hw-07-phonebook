// import { useState } from 'react';
import { Form } from './Form/Form.jsx';
import ContactList from './ContactList/ContactList.jsx';
import Filter from './Filter/Filter.jsx';
// import { nanoid } from 'nanoid';
// import { useEffect } from 'react';

export const App = () => {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const contactsLocalStorage = JSON.parse(
  //     localStorage.getItem('my contacts')
  //   );
  //   if (contactsLocalStorage.length) {
  //     setContacts(contactsLocalStorage);
  //   }
  // }, []);

  // useEffect(
  //   () => localStorage.setItem('my contacts', JSON.stringify(contacts)),
  //   [contacts]
  // );

  // const addContact = ({ name, number }) => {
  //   if (contacts.find(contact => contact.name === name)) {
  //     return alert(`${name} is already in contacts.`);
  //   } else {
  //     const newContact = {
  //       id: nanoid(),
  //       name,
  //       number,
  //     };
  //     setContacts(prevContacts => {
  //       return [newContact, ...prevContacts];
  //     });
  //   }
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== contactId)
  //   );
  // };
  // const addFilter = event => setFilter(event.target.value);

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase().trim();
  //   return contacts.filter(
  //     contact =>
  //       contact.name.toLowerCase().includes(normalizedFilter) ||
  //       contact.number.toLowerCase().includes(normalizedFilter)
  //   );
  // };

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

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem('my contacts'));
//     if (contacts && contacts.length) {
//       this.setState({ contacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts.length !== this.state.contacts.length) {
//       localStorage.setItem('my contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = ({ name, number }) => {
//     if (this.state.contacts.find(contact => contact.name === name)) {
//       return alert(`${name} is already in contacts.`);
//     } else {
//       const newContact = { id: nanoid(), name, number };
//       this.setState(({ contacts: prevState }) => ({
//         contacts: [...prevState, newContact],
//       }));
//     }
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   addFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   getVisibleContacts() {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase().trim();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   }

//   render() {
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <Form onSubmit={this.addContact} />

//         <h2>Contacts</h2>
//         <Filter filter={this.state.filter} onChangeFilter={this.addFilter} />

//         <ContactList
//           contacts={this.getVisibleContacts()}
//           deleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }
