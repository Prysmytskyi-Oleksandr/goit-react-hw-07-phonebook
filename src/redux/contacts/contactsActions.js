import { createAction } from '@reduxjs/toolkit';

export const fetchAllContactsLoading = createAction('contacts/fetch/loading');
export const fetchAllContactsSuccsess = createAction('contacts/fetch/success');
export const fetchAllContactsError = createAction('contacts/fetch/error');

export const fetchAddContactLoading = createAction('contacts/add/loading');
export const fetchAddContactSuccsess = createAction('contacts/add/success');
export const fetchAddContactError = createAction('contacts/add/error');

export const fetchDeleteContactLoading = createAction(
  'contacts/delete/loading'
);
export const fetchDeleteContactSuccsess = createAction(
  'contacts/delete/success'
);
export const fetchDeleteContactError = createAction('contacts/delete/error');
