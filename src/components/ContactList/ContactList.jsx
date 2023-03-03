import { useSelector } from 'react-redux';

import ContactItem from './ContactItem/ContactItem';
import styles from './contactList.module.css';

const ContactList = () => {
  const contacts = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const listContactsByFilter = filterContacts();

  return (
    <ol className={styles.list}>
      {listContactsByFilter.map(({ id, name, number }) => {
        return <ContactItem key={id} name={name} number={number} nameId={id} />;
      })}
    </ol>
  );
};

export default ContactList;
