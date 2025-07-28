const express = require('express');
const router = express.Router();
const { login, getProfile } = require('../controllers/adminController');

// @route   POST api/admin/login
// @desc    Admin login
// @access  Public
router.post('/login', login);

// @route   GET api/admin/profile
// @desc    Get admin profile
// @access  Private (will add middleware later)
router.get('/profile', getProfile);

module.exports = router; 