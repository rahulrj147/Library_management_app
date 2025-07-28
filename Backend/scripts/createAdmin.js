require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected for admin creation'))
  .catch((err) => console.error('MongoDB connection error:', err));

const createDefaultAdmin = async () => {
  try {
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: 'admin@library.com' });
    
    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    // Create hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);

    // Create admin user
    const admin = new Admin({
      name: 'Library Administrator',
      email: 'admin@library.com',
      password: hashedPassword,
      role: 'admin',
      isActive: true,
    });

    await admin.save();
    console.log('Default admin user created successfully!');
    console.log('Email: admin@library.com');
    console.log('Password: admin123');
    
  } catch (err) {
    console.error('Error creating admin:', err.message);
  } finally {
    mongoose.connection.close();
  }
};

createDefaultAdmin(); 