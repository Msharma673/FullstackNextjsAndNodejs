const Joi = require('joi');
const authService = require('../services/authService');
const { buildSuccess } = require('../utils/apiResponse');

const registerSchema = Joi.object({
  name: Joi.string().min(3).max(120).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

const register = async (req, res, next) => {
  try {
    const payload = await registerSchema.validateAsync(req.body, { abortEarly: false });
    const result = await authService.register(payload);
    res.status(201).json(buildSuccess(result, 'User registered successfully'));
  } catch (error) {
    if (error.isJoi) {
      error.statusCode = 422;
      error.details = error.details.map((detail) => detail.message);
    }
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const payload = await loginSchema.validateAsync(req.body, { abortEarly: false });
    const result = await authService.login(payload);
    res.json(buildSuccess(result, 'Login successful'));
  } catch (error) {
    if (error.isJoi) {
      error.statusCode = 422;
      error.details = error.details.map((detail) => detail.message);
    }
    next(error);
  }
};

module.exports = {
  register,
  login
};

