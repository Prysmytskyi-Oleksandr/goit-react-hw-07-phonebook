import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllContactsLoading,
  fetchAllContactsSuccsess,
  fetchAllContactsError,
  fetchAddContactLoading,
  fetchAddContactSuccsess,
  fetchAddContactError,
  fetchDeleteContactLoading,
  fetchDeleteContactSuccsess,
  fetchDeleteContactError,
} from './contactsActions';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchAllContactsLoading]: store => {
      store.loading = true;
    },
    [fetchAllContactsSuccsess]: (store, { payload }) => {
      console.log(payload);
      store.loading = false;
      store.items = payload;
    },
    [fetchAllContactsError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [fetchAddContactLoading]: store => {
      store.loading = true;
    },
    [fetchAddContactSuccsess]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [fetchAddContactError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [fetchDeleteContactLoading]: store => {
      store.loading = true;
    },
    [fetchDeleteContactSuccsess]: (store, { payload }) => {
      store.loading = false;
      const index = store.items.findIndex(item => item.id === payload);
      store.items.splice(index, 1);
    },
    [fetchDeleteContactError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
