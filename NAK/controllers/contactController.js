const jwt = require('jsonwebtoken');
const contactService = require('../services/contactService');
/**
 * getContact
 *
 * @param {Object} req the http request
 * @param {Object} res the http response
 * @returns {Object} the User object
 */
const getContact = (req, res) => {
  const idToken = req.headers.id_token;
  if (idToken && idToken !== '') {
    // TODO Verify JWT format
    const decoded = jwt.decode(idToken, { complete: true });
    const { payload } = decoded;
    // Test result with contactID
    const { contactidmock } = req.headers;
    payload.contactId = contactidmock;
    if (!payload.contactId) {
      // TODO Mapping payload to contact model
      // contactService.mapContact(payload);
      res.status(200).json(payload);
    } else {
      contactService.getContact()
        .then((result) => {
          res.status(200).json(result);
        });
    }
  } else {
    res.status(500).json({ msg: 'id_token is required' });
  }
};

module.exports = { getContact };
