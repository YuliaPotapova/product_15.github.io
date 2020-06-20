const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const InvalidReqError = require('../errors/invalidReqError');

module.exports.validationForCreateCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30)
      .error(() => new InvalidReqError('Некорректное название карточки')),
    link: Joi.string().required()
      .custom((value, helpers) => (validator.isURL(value) ? value : helpers.error()))
      .error(() => new InvalidReqError('Неверная ссылка на ресурс')),
  }),
});

module.exports.validationForCardId = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().hex().length(24)
      .error(() => new InvalidReqError('Некорректный идентификатор карточки')),
  }),
});
