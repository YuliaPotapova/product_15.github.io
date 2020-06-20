const routUsers = require('express').Router();

const {
  validationForGetUser,
  validationForUpdateUser,
  validationForUpdateAvatar,
} = require('../middlewares/validationForUsers');

const {
  getAllUsers,
  getUser,
  updateUser,
  updateAvatar,
} = require('../controllers/users');

const auth = require('../middlewares/auth');

routUsers.get('/', auth, getAllUsers);
routUsers.get('/:id', auth, validationForGetUser, getUser);
routUsers.patch('/me', auth, validationForUpdateUser, updateUser);
routUsers.patch('/me/avatar', auth, validationForUpdateAvatar, updateAvatar);

module.exports = routUsers;
