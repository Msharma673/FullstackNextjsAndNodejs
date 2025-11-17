const jwt = require('jsonwebtoken');
const env = require('../env');

const signAccessToken = (payload) => {
  return jwt.sign(payload, env.jwt.secret, { expiresIn: env.jwt.expiresIn });
};

module.exports = {
  signAccessToken
};

