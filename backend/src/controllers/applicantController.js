const Joi = require('joi');
const applicantService = require('../services/applicantService');
const { buildSuccess } = require('../utils/apiResponse');

const applicantSchema = Joi.object({
  name: Joi.string().min(3).max(150).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(6).max(20).required(),
  city: Joi.string().max(120).required(),
  country: Joi.string().max(120).required(),
  courseApplyFor: Joi.string().max(120).required(),
  education: Joi.string().max(200).required(),
  targetCountry: Joi.string().max(120).required()
});

const createApplicant = async (req, res, next) => {
  try {
    const payload = await applicantSchema.validateAsync(req.body, { abortEarly: false });
    const applicant = await applicantService.create(payload);
    res.status(201).json(buildSuccess(applicant, 'Applicant created'));
  } catch (error) {
    if (error.isJoi) {
      error.statusCode = 422;
      error.details = error.details.map((detail) => detail.message);
    }
    next(error);
  }
};

const listApplicants = async (req, res, next) => {
  try {
    const data = await applicantService.list();
    res.json(buildSuccess(data, 'Applicants fetched'));
  } catch (error) {
    next(error);
  }
};

const getApplicant = async (req, res, next) => {
  try {
    const applicant = await applicantService.getById(Number(req.params.id));
    res.json(buildSuccess(applicant, 'Applicant fetched'));
  } catch (error) {
    next(error);
  }
};

const updateApplicant = async (req, res, next) => {
  try {
    const payload = await applicantSchema.validateAsync(req.body, { abortEarly: false });
    const applicant = await applicantService.update(Number(req.params.id), payload);
    res.json(buildSuccess(applicant, 'Applicant updated'));
  } catch (error) {
    if (error.isJoi) {
      error.statusCode = 422;
      error.details = error.details.map((detail) => detail.message);
    }
    next(error);
  }
};

const deleteApplicant = async (req, res, next) => {
  try {
    await applicantService.remove(Number(req.params.id));
    res.json(buildSuccess(null, 'Applicant deleted'));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createApplicant,
  listApplicants,
  getApplicant,
  updateApplicant,
  deleteApplicant
};

