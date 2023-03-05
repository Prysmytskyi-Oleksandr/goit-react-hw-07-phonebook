import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { fetchDeleteContact } from 'redux/contacts/contactsOperations';

import styles from '../contactList.module.css';

const ContactItem = ({ name, phone, nameId }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    const action = fetchDeleteContact(id);
    dispatch(action);
  };

  return (
    <li className={styles.contact_item}>
      <p>
        {name}: {phone}
      </p>

      <button
        className={styles.button}
        type="button"
        onClick={() => handleDeleteContact(nameId)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  nameId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
