////done!

import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../components/Api/contacts-api';

export const createOperation = (name, request, condition) => {
  const operation = createAsyncThunk(
    name,
    async (data, { rejectWithValue }) => {
      try {
        const result = await request(data);
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    },
    { condition }
  );
  return operation;
};

export const pendingCallback = store => {
  store.loading = true;
  store.error = null;
};

export const rejectedCallback = (store, { payload }) => {
  store.loading = false;
  store.error = payload;
};

const isDublicate = ({ name, phone }, contacts) => {
  const normalizedName = name.toLowerCase();
  const normalizedNumber = phone.toLowerCase();

  const result = contacts.find(item => {
    return (
      normalizedName === item.name.toLowerCase() &&
      normalizedNumber === item.phone.toLowerCase()
    );
  });
  return Boolean(result);
};

export const fetchContacts = createOperation(
  'contacts/fetch',
  api.getContactsFromApi
);

export const addContactFromApi = createOperation(
  'contacts/add',
  api.addContactFromApi,
  (data, { getState }) => {
    const { contacts } = getState();
    if (isDublicate(data, contacts.items)) {
      alert(`${data.name} : ${data.phone} is already in list`);
      return false;
    }
  }
);

export const deleteContactFromApi = createOperation(
  'contacts/remove',
  api.deleteContactFromApi
);
