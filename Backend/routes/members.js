const express = require('express');
const router = express.Router();
const { addMember, getAllMembers } = require('../controllers/memberController');

// @route   POST api/members
// @desc    Add a new member
// @access  Private
router.post('/', addMember);

// @route   GET api/members
// @desc    Get all members
// @access  Private
router.get('/', getAllMembers);

module.exports = router;
