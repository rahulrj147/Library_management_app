import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const links = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    setNav(false);
  };

  const authLinks = (
    <>
      <button onClick={handleLogout} className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Logout</button>
    </>
  );

  const guestLinks = (
    <>
      <Link to="/login" className="px-4 py-1 border border-blue-600 rounded hover:bg-blue-50 transition">Login</Link>
      <Link to="/signup" className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Signup</Link>
    </>
  );

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="text-2xl font-bold text-blue-700 cursor-pointer">
          <Link to="/">LibrarySys</Link>
        </div>
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="cursor-pointer hover:text-blue-600 transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex space-x-4">
          {isAuthenticated ? authLinks : guestLinks}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setNav(!nav)} className="text-2xl">
            {nav ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {nav && (
        <ul className="md:hidden flex flex-col items-center bg-white w-full py-6 space-y-6 shadow-lg animate-fade-in-down">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="cursor-pointer text-lg hover:text-blue-600 transition" onClick={() => setNav(false)}>
                {link.name}
              </Link>
            </li>
          ))}
          <div className="flex flex-col space-y-4 items-center">
            {isAuthenticated ? 
              <>
                <button onClick={handleLogout} className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Logout</button>
              </> 
              : 
              <>
                <Link to="/login" className="px-4 py-1 border border-blue-600 rounded hover:bg-blue-50 transition" onClick={() => setNav(false)}>Login</Link>
                <Link to="/signup" className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition" onClick={() => setNav(false)}>Signup</Link>
              </>
            }
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;