const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ msg: 'user not found' });
    }

    // Check if admin is active
    if (!admin.isActive) {
      return res.status(400).json({ msg: 'Account is deactivated' });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Create JWT payload
    const payload = {
      admin: {
        id: admin.id,
        role: admin.role,
      },
    };

    // Sign JWT token
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '24h' }, // Admin tokens last longer
      (err, token) => {
        if (err) throw err;
        
        // Return admin data (without password) and token
        const adminData = {
          id: admin.id,
          name: admin.name,
          email: admin.email,
          role: admin.role,
        };
        
        res.json({
          token,
          admin: adminData,
        });
      }
    );
  } catch (err) {
    console.error('Admin login error:', err.message);
    res.status(500).send('Server error');
  }
};

// Get admin profile (protected route)
exports.getProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select('-password');
    res.json(admin);
  } catch (err) {
    console.error('Get admin profile error:', err.message);
    res.status(500).send('Server error');
  }
}; 