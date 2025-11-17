const logger = require('../config/logger');
const { buildError } = require('../utils/apiResponse');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  logger.error({ err }, 'Unhandled API error');

  const statusCode = err.statusCode ?? 500;
  const message = err.message ?? 'Internal server error';
  const details = err.details ?? [];

  res.status(statusCode).json(buildError(message, details));
};

module.exports = errorHandler;

