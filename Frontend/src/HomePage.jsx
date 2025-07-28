import React from 'react';
import Navbar from './components/Navbar';
import { FaBook, FaUserFriends, FaLaptop, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const services = [
  { icon: <FaBook className="text-blue-600 text-3xl" />, title: 'Book Borrowing', desc: 'Borrow from a vast collection of books.' },
  { icon: <FaUserFriends className="text-blue-600 text-3xl" />, title: 'Membership', desc: 'Become a member and enjoy exclusive benefits.' },
  { icon: <FaLaptop className="text-blue-600 text-3xl" />, title: 'Digital Library', desc: 'Access e-books and digital resources.' },
];

const HomePage = () => {
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300 pt-24 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-4">Welcome to Your Library</h1>
        <p className="text-xl md:text-2xl text-blue-700 mb-8">Explore Knowledge, One Book at a Time</p>
        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition">Explore Now</button>
      </section>
      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">About Us</h2>
        <p className="text-gray-700 mb-2">Our library has been a cornerstone of the community for over 50 years, providing access to knowledge, culture, and technology. Our mission is to foster a love for reading and lifelong learning in a welcoming environment.</p>
        <p className="text-gray-700">We offer a wide range of books, digital resources, and community programs to support education and personal growth for all ages.</p>
      </section>
      {/* Services Section */}
      <section id="services" className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg p-6 flex flex-col items-center shadow hover:scale-105 transition-transform duration-300">
                {service.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-blue-700">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Contact Us</h2>
        <form className="bg-white rounded-lg shadow p-6 mb-6 grid gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Your Email" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Send Message</button>
        </form>
        <div className="flex flex-col md:flex-row md:space-x-8 text-gray-700">
          <div className="flex items-center mb-2 md:mb-0"><FaMapMarkerAlt className="mr-2 text-blue-600" />123 Library St, City, Country</div>
          <div className="flex items-center mb-2 md:mb-0"><FaPhoneAlt className="mr-2 text-blue-600" />+1 234 567 890</div>
          <div className="flex items-center"><FaEnvelope className="mr-2 text-blue-600" />info@library.com</div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center py-4 mt-8">
        &copy; {new Date().getFullYear()} Library Management System. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage; 