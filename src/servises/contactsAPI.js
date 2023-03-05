import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://63ff81b229deaba5cb26789c.mockapi.io/contacts',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/');
  console.log(data);
  return data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
