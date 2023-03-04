import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import * as actions from './contactsActions';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    [actions.fetchAllContactsLoading]: store => {
      store.loading = true;
    },
    [actions.fetchAllContactsSuccsess]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [actions.fetchAllContactsError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [actions.fetchAddContactsLoading]: store => {
      store.loading = true;
    },
    [actions.fetchAddContactsSuccsess]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [actions.fetchAddContactsError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
