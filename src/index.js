import path from 'node:path';
import fs from 'node:fs/promises';

const message = 'Hello Jey';

console.log(message);

console.log(path.parse('C:\\Users\\ekate\\OneDrive\\Desktop\\index.txt'));

const buffer = await fs.readFile('C:\\Users\\ekate\\OneDrive\\Desktop\\12-15-23\\index.txt');
// припустимо, що в файлі hello.txt був текст Hello World!

console.log(buffer);
///<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>

import { faker } from "@faker-js/faker";

export const createFakeContact = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  job: faker.person.jobTitle(),
});

console.log(createFakeContact()); 