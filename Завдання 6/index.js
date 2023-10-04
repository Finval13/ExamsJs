"use strict";

class Contact {
  constructor(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
  }
}

class PhoneBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    this.contacts.push(contact);
  }

  editContact(index, updateContact) {
    this.contacts[index] = updateContact;
  }
  deleteContact(index) {
    this.contacts.splice(index, 1);
  }

  displayContacts() {
    this.contacts.forEach((contact, index) => {
      console.log(`Contact ${index + 1}:`);
      console.log(`First Name: ${contact.firstName}`);
      console.log(`Last Name: ${contact.lastName}`);
      console.log(`Phone: ${contact.phone}`);
      console.log(`Email: ${contact.email}`);
      console.log(`-----------------------`);
    });
  }
}

const phoneBook = new PhoneBook();

const contact1 = new Contact("Jack", "Johnson", "000-000-0000", "jooo@gmail.com");
const contact2 = new Contact("John", "Jackson", "000-000-0000", "Jaaaac@gmail.com");

phoneBook.addContact(contact1);
phoneBook.addContact(contact2);

phoneBook.displayContacts();

const updatesContact = new Contact("Eva", "Evan", "111-111-222-3333", "weqkwjeq@gmail.com");
phoneBook.editContact(0, updatesContact);

phoneBook.displayContacts();
