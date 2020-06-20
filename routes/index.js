const routes = require('express').Router();
const routSignUp = require('./signup');
const routSignIn = require('./signin');
const routUsers = require('./users');
const routCards = require('./cards');
const NotFoundError = require('../errors/notFoundError');

routes.use('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
routes.use('/signup', routSignUp);
routes.use('/signin', routSignIn);
routes.use('/users', routUsers);
routes.use('/cards', routCards);
routes.use((req, res, next) => next(new NotFoundError('Запрашиваемый ресурс не найден')));

module.exports = routes;
