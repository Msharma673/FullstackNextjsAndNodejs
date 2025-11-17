const express = require('express');
const authRoutes = require('./authRoutes');
const applicantRoutes = require('./applicantRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/applicants', applicantRoutes);

router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is up and running'
  });
});

module.exports = router;

