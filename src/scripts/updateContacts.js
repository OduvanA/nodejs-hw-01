import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const updateContacts = contacts =>
  fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

