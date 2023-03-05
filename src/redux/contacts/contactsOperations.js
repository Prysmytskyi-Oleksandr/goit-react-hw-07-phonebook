import * as api from '../../servises/contactsAPI';

import * as actions from './contactsActions';

export const fetchAllContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchAllContactsLoading());
      const data = await api.getAllContacts();
      dispatch(actions.fetchAllContactsSuccsess(data));
    } catch ({ response }) {
      dispatch(actions.fetchAllContactsError(response.data.message));
    }
  };
  return func;
};

export const fetchAddContact = data => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchAddContactLoading());
      const result = await api.addContact(data);
      dispatch(actions.fetchAddContactSuccsess(result));
    } catch ({ response }) {
      dispatch(actions.fetchAddContactError(response.data.message));
    }
  };
  return func;
};

export const fetchDeleteContact = id => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchDeleteContactLoading());
      await api.deleteContact(id);
      dispatch(actions.fetchDeleteContactSuccsess(id));
    } catch ({ response }) {
      dispatch(actions.fetchDeleteContactError(response.data.message));
    }
  };
  return func;
};
