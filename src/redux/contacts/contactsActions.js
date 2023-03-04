import { createAction } from '@reduxjs/toolkit';

export const fetchAllContactsLoading = createAction('contacts/fetch/loading');
export const fetchAllContactsSuccsess = createAction('contacts/fetch/success');
export const fetchAllContactsError = createAction('contacts/fetch/error');

export const fetchAddContactsLoading = createAction('contacts/add/loading');
export const fetchAddContactsSuccsess = createAction('contacts/add/success');
export const fetchAddContactsError = createAction('contacts/add/error');

export const fetchDeleteContactsLoading = createAction(
  'contacts/delete/loading'
);
export const fetchDeleteContactsSuccsess = createAction(
  'contacts/deletedd/success'
);
export const fetchDeleteContactsError = createAction('contacts/deleted/error');
