
const contact = require('../models/contact');
/**
 * getContact
 */
const getContact = () => {
  const promise = new Promise((resolve) => {
    // TODO GET /contacts/{contactId}
    resolve(contact);
  });
  return promise;
};

const mapContact = payload => payload;

module.exports = { getContact, mapContact };
