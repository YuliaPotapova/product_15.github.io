const routUsers = require('express').Router();

const {
  validationForGetUser,
  validationForCreateUser,
  validationForUpdateUser,
  validationForUpdateAvatar,
  validationForLogin,
} = require('../middlewares/validationForUsers');

const {
  getAllUsers,
  getUser,
  createUser,
  login,
  updateUser,
  updateAvatar,
} = require('../controllers/users');

const auth = require('../middlewares/auth');

routUsers.get('/', auth, getAllUsers);
routUsers.get('/:id', auth, validationForGetUser, getUser);
routUsers.post('/signup', validationForCreateUser, createUser);
routUsers.post('/signin', validationForLogin, login);
routUsers.patch('/me', auth, validationForUpdateUser, updateUser);
routUsers.patch('/me/avatar', auth, validationForUpdateAvatar, updateAvatar);

module.exports = routUsers;
