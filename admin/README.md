# Admin Panel - Library Management System

This is the admin panel for the Library Management System.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Default Admin User
First, make sure your backend server is running, then create the default admin user:

```bash
cd ../Backend
npm run create-admin
```

This will create a default admin user with:
- **Email**: admin@library.com
- **Password**: admin123

### 3. Start the Admin Panel
```bash
npm run dev
```

The admin panel will be available at `http://localhost:5174` (or the next available port).

## Features

- **Secure Admin Login**: Only pre-configured admin users can access the panel
- **Protected Routes**: Dashboard is only accessible after authentication
- **JWT Authentication**: Secure token-based authentication
- **Responsive Design**: Works on desktop and mobile devices

## Admin Credentials

The default admin credentials are:
- **Email**: admin@library.com
- **Password**: admin123

**Important**: Change these credentials after first login for security.

## File Structure

```
admin/
├── src/
│   ├── components/
│   │   ├── AdminLogin.jsx      # Admin login form
│   │   └── AdminDashboard.jsx  # Admin dashboard
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Security Notes

- Admin users are stored in the database with hashed passwords
- JWT tokens are used for session management
- No signup functionality - admins must be added manually to the database
- Protected routes prevent unauthorized access to admin features
