import * as api from '../../servises/contacrsAPI';

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
      dispatch(actions.fetchAddContactsLoading());
      const result = await api.addContact(data);
      dispatch(actions.fetchAddContactsSuccsess(result));
    } catch ({ response }) {
      dispatch(actions.fetchAddContactsError(response.data.message));
    }
    };
     return func;
};


export  const fetchDeleteContact