import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");

export const listContacts = async () => {
  try {
    const contactsList = await fs.readFile(contactsPath);

    return contactsList.toString();
  } catch (error) {
    return error;
  }
};

export const getContactById = async (contactId) => {};

export const removeContact = async (contactId) => {};

export const addContact = async (name, email, phone) => {};
