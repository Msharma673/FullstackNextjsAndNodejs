const applicantModel = require('../models/applicantModel');

const create = async (payload) => {
  return applicantModel.createApplicant(payload);
};

const list = async () => {
  return applicantModel.findAll();
};

const getById = async (id) => {
  const applicant = await applicantModel.findById(id);
  if (!applicant) {
    const error = new Error('Applicant not found');
    error.statusCode = 404;
    throw error;
  }
  return applicant;
};

const update = async (id, payload) => {
  await getById(id);
  return applicantModel.updateApplicant(id, payload);
};

const remove = async (id) => {
  const deleted = await applicantModel.deleteApplicant(id);
  if (!deleted) {
    const error = new Error('Applicant not found');
    error.statusCode = 404;
    throw error;
  }
};

module.exports = {
  create,
  list,
  getById,
  update,
  remove
};

