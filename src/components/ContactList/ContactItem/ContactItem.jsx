import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';

import styles from '../contactList.module.css';

const ContactItem = ({ name, number, nameId }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  return (
    <li className={styles.contact_item}>
      <p>
        {name}: {number}
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
  number: PropTypes.string.isRequired,
};

export default ContactItem;
