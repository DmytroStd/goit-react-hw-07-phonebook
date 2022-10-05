import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://633c87ddf2b0e623dc64061a.mockapi.io',
});

export const getContactsFromApi = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContactFromApi = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const deleteContactFromApi = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
