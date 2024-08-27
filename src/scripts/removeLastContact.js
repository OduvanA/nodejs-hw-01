// import { PATH_DB } from '../constants/contacts.js';
import { updateContacts } from '../utils/updateContacts.js';
import { getAllContacts } from './getAllContacts.js';

export const removeLastContact = async () => {
  const contactList = await getAllContacts();
  contactList.pop();
  await updateContacts(contactList);
};

removeLastContact();
