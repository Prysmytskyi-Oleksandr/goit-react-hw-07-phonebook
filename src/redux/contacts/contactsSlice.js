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
  extraReducers: builder => {
    builder
      .addCase(fetchAllContactsLoading, store => {
        store.loading = true;
      })
      .addCase(fetchAllContactsSuccsess, (store, { payload }) => {
        console.log(payload);
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchAllContactsError, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchAddContactLoading, store => {
        store.loading = true;
      })
      .addCase(fetchAddContactSuccsess, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddContactError, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteContactLoading, store => {
        store.loading = true;
      })
      .addCase(fetchDeleteContactSuccsess, (store, { payload }) => {
        store.loading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(fetchDeleteContactError, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
