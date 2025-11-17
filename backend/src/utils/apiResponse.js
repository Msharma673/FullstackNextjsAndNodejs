const buildSuccess = (data, message = 'Success') => ({
  success: true,
  message,
  data
});

const buildError = (message = 'Something went wrong', details = []) => ({
  success: false,
  message,
  details
});

module.exports = {
  buildSuccess,
  buildError
};

