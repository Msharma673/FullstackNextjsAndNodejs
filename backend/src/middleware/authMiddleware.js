const jwt = require('jsonwebtoken');
const env = require('../env');
const { buildError } = require('../utils/apiResponse');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json(buildError('Authorization header missing'));
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, env.jwt.secret);
    req.user = payload;
    return next();
  } catch (error) {
    return res.status(401).json(buildError('Invalid or expired token'));
  }
};

module.exports = authMiddleware;

