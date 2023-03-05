import { useSelector, useDispatch } from 'react-redux';
import initialState from './InitialState';
import styles from './form.module.css';

import { fetchAddContact } from 'redux/contacts/contactsOperations';

export const Form = () => {
  const contacts = useSelector(store => store.contacts.items);
  const dispatch = useDispatch();

  const handleChange = event => {
    initialState[event.target.name] = event.target.value;
    return;
  };

  const onAddContact = data => {
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    const action = fetchAddContact(data.name, data.phone);
    dispatch(action);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddContact(initialState);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter the name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />

      <label>Number</label>
      <input
        type="tel"
        name="number"
        placeholder="Enter the number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />

      <button type="submit" className={styles.btn_form}>
        Add contact
      </button>
    </form>
  );
};
