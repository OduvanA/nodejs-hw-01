import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import DetectFileEncodingAndLanguage from 'detect-file-encoding-and-language';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const { encoding } = await DetectFileEncodingAndLanguage(PATH_DB);
  // const newContactList = await fs.readFile(PATH_DB, encoding);
  const contactList = JSON.parse(await fs.readFile(PATH_DB, encoding));
  const newContactList = Array(number).fill(0).map(createFakeContact);
  contactList.push(...newContactList);
  await fs.writeFile(PATH_DB, JSON.stringify(contactList, null, 2));
console.log(contactList);
  // const newContactList = Array(number).fill(0).map(createFakeContact);
  // const result = await fs.writeFile(PATH_DB, JSON.stringify(newContactList, null, 2));
  // console.log(result);
};

generateContacts(5);
