const Contacts = require('../repository/contacts');

const getContactsList = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const contacts = await Contacts.listContacts(userId, req.query);
    res.json({
      status: 'success',
      code: 200,
      data: {
        contacts,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getContact = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const contact = await Contacts.getContactById(req.params.contactId, userId);

    if (!contact) {
      return res
        .status(404)
        .json({ status: 'error', code: 404, message: 'Contact not found' });
    }

    return res
      .status(200)
      .json({ status: 'success', code: 200, data: { contact } });
  } catch (error) {
    next(error);
  }
};

const createContact = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const contact = await Contacts.addContact({ ...req.body, owner: userId });
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        contact,
      },
    });
  } catch (error) {
    next(error);
  }
};

const removeContact = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const contact = await Contacts.removeContact(req.params.contactId, userId);

    if (!contact) {
      return res
        .status(404)
        .json({ status: 'error', code: 404, message: 'Contact not found' });
    }

    return res
      .status(200)
      .json({ status: 'success', code: 200, data: { contact } });
  } catch (error) {
    next(error);
  }
};

const updateContact = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const contact = await Contacts.updateContact(
      req.params.contactId,
      req.body,
      userId,
    );

    if (!contact) {
      return res
        .status(404)
        .json({ status: 'error', code: 404, message: 'Contact not found' });
    }

    return res
      .status(200)
      .json({ status: 'success', code: 200, data: { contact } });
  } catch (error) {
    next(error);
  }
};

const updateStatusFavorite = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const contact = await Contacts.updateContact(
      req.params.contactId,
      req.body,
      userId,
    );

    if (!contact) {
      return res
        .status(404)
        .json({ status: 'error', code: 404, message: 'Contact not found' });
    }

    return res
      .status(200)
      .json({ status: 'success', code: 200, data: { contact } });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getContactsList,
  getContact,
  createContact,
  removeContact,
  updateContact,
  updateStatusFavorite,
};
