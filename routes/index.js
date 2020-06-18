const routes = require('express').Router();
const routUsers = require('./users');
const routCards = require('./cards');
const NotFoundError = require('../errors/notFoundError');

routes.use('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
routes.use('/users', routUsers);
routes.use('/cards', routCards);
routes.use((req, res, next) => next(new NotFoundError('Запрашиваемый ресурс не найден')));

module.exports = routes;
