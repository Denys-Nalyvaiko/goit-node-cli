import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");

export const listContacts = async () => {
  try {
    const contactList = await fs.readFile(contactsPath);

    return contactList.toString();
  } catch (error) {
    return error;
  }
};

export const getContactById = async (contactId) => {
  try {
    const contactListBuffer = await fs.readFile(contactsPath);
    const contactList = JSON.parse(contactListBuffer.toString());

    const targetContact =
      contactList.find((contact) => contact.id === contactId) || null;

    return targetContact;
  } catch (error) {
    return error;
  }
};

export const removeContact = async (contactId) => {};

export const addContact = async (name, email, phone) => {};
