const jwt = require('jsonwebtoken');
const AuthError = require('../errors/authError');

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) return next(new AuthError('Необходима авторизация'));
  let payload;
  try {
    payload = jwt.verify(token, (process.env.JWT_SECRET || 'dev-secret'));
  } catch (err) {
    return next(new AuthError('Необходима авторизация'));
  }
  req.user = payload;
  return next();
};
