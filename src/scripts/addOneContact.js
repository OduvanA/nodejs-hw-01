// import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { updateContacts } from './updateContacts.js';
import { getAllContacts } from './getAllContacts.js';

export const addOneContact = async () => {
  const newSong = createFakeContact();
  const contactList = await getAllContacts();
  contactList.push(newSong);
  await updateContacts(contactList);
};

addOneContact();
