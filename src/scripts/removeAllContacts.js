// import { PATH_DB } from '../constants/contacts.js';
import { updateContacts } from '../utils/updateContacts.js';

export const removeAllContacts = async () => {
  await updateContacts([]);
};

removeAllContacts();
