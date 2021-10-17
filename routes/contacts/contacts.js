const express = require('express');
const router = express.Router();
const {
  getContactsList,
  getContact,
  createContact,
  removeContact,
  updateContact,
  updateStatusFavorite,
} = require('../../controllers/contacts');
const {
  validateContact,
  validateStatusContact,
  validateId,
} = require('./validation');
const guard = require('../../helpers/guard');

router.get('/', guard, getContactsList);

router.get('/:contactId', guard, validateId, getContact);

router.post('/', guard, validateContact, createContact);

router.delete('/:contactId', guard, validateId, removeContact);

router.put('/:contactId', guard, [validateId, validateContact], updateContact);

router.patch(
  '/:contactId/favorite/',
  guard,
  [validateId, validateStatusContact],
  updateStatusFavorite,
);

module.exports = router;
