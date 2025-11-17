const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');
const tokenService = require('./tokenService');

const register = async ({ name, email, password }) => {
  const existingUser = await userModel.findByEmail(email);
  if (existingUser) {
    const error = new Error('Email is already registered');
    error.statusCode = 409;
    throw error;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await userModel.insertUser({ name, email, passwordHash });
  const token = tokenService.signAccessToken({ sub: user.id, email: user.email });

  return { user, token };
};

const login = async ({ email, password }) => {
  const user = await userModel.findByEmail(email);
  if (!user) {
    const error = new Error('Invalid email or password');
    error.statusCode = 401;
    throw error;
  }

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) {
    const error = new Error('Invalid email or password');
    error.statusCode = 401;
    throw error;
  }

  const token = tokenService.signAccessToken({ sub: user.id, email: user.email });
  return {
    user: { id: user.id, name: user.name, email: user.email },
    token
  };
};

module.exports = {
  register,
  login
};

