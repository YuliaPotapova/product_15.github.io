const { celebrate, Joi } = require('celebrate');
const InvalidReqError = require('../errors/invalidReqError');

module.exports.validationForCreateCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30)
      .error(() => new InvalidReqError('Некорректное название карточки')),
    link: Joi.string().required().uri()
      .error(() => new InvalidReqError('Неверная ссылка на ресурс')),
  }),
});

module.exports.validationForCardId = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().alphanum().length(24)
      .error(() => new InvalidReqError('Некорректный идентификатор карточки')),
  }),
});
