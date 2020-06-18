const routCards = require('express').Router();

const {
  validationForCreateCard, validationForCardId,
} = require('../middlewares/validationForCards');

const {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

const auth = require('../middlewares/auth');

routCards.get('/', auth, getCards);
routCards.post('/', auth, validationForCreateCard, createCard);
routCards.delete('/:cardId', auth, validationForCardId, deleteCard);
routCards.put('/:cardId/likes', auth, validationForCardId, likeCard);
routCards.delete('/:cardId/likes', auth, validationForCardId, dislikeCard);

module.exports = routCards;
