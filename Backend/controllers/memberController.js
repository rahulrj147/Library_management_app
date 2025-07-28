const Member = require('../models/Member');

exports.addMember = async (req, res) => {
  try {
    const newMember = new Member(req.body);
    const member = await newMember.save();
    res.json(member);
  } catch (err) {
    console.error(err.message);
    if (err.code === 11000) {
      return res.status(400).json({ msg: err.message });
    }
    res.status(500).send('Server Error');
  }
};

exports.getAllMembers = async (req, res) => {
  try {
    const members = await Member.find().sort({ createdAt: -1 });
    res.json(members);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
