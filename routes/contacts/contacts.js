const express = require('express');
const router = express.Router();
const {
  getContactsList,
  getContact,
  createContact,
  removeContact,
  updateContact,
  updateStatusFavorite,
}= require('../../controllers/contacts')
const {
  validateContact,
  validateStatusContact,
  validateId,
} = require('./validation');

router.get('/', getContactsList);

router.get('/:contactId', validateId, getContact);

router.post('/', validateContact, createContact);

router.delete('/:contactId', validateId, removeContact);

router.put('/:contactId', [validateId, validateContact], updateContact);

router.patch('/:contactId/favorite/', [validateId, validateStatusContact],updateStatusFavorite);

module.exports = router;
