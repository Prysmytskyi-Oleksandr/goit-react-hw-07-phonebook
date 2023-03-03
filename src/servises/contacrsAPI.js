import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://63ff81b229deaba5cb26789c.mockapi.io/contacts',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};
