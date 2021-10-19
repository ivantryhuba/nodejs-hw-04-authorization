const express = require('express');
const router = express.Router();
const { registration, login, logout } = require('../../controllers/users');
const guard = require('../../helpers/guard');
const loginLimit = require('../../helpers/rateLimitLogin');

router.post('/signup', registration);
router.post('/login',loginLimit, login);
router.post('/logout', guard, logout);

module.exports = router;
