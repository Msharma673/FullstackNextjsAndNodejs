const express = require('express');
const applicantController = require('../controllers/applicantController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router
  .route('/')
  .get(applicantController.listApplicants)
  .post(applicantController.createApplicant);

router
  .route('/:id')
  .get(applicantController.getApplicant)
  .put(applicantController.updateApplicant)
  .delete(applicantController.deleteApplicant);

module.exports = router;

