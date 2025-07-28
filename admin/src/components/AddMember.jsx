import React, { useState } from 'react';
import axios from 'axios';

const InputField = ({ label, name, value, onChange, maxLength, readOnly = false, type = "text" }) => (
  <div className="flex flex-col">
    <label className="text-gray-700 font-medium mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      readOnly={readOnly}
      className={`p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
        readOnly ? 'bg-gray-100 text-gray-600' : 'bg-white hover:border-gray-400'
      }`}
    />
    {maxLength && type === "text" && (
      <span className="text-gray-500 text-xs self-end mt-1">
        {value.length}/{maxLength}
      </span>
    )}
  </div>
);

const SelectField = ({ label, name, value, onChange, options }) => (
  <div className="flex flex-col">
    <label className="text-gray-700 font-medium mb-2">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white hover:border-gray-400"
    >
      <option value="" disabled>{label}</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

const AddMember = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    contact: '',
    aadhar: '',
    address: '',
    gender: 'Male',
    shift: '',
    timing: '',
    monthlyFees: '',
    feesSubmit: '',
    seat: '',
    joiningDate: '2025-03-31',
    feesPaidTill: '2025-04-30',
    paymentMode: '',
    profilePicture: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.post('http://localhost:5000/api/members', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      setMessage('Student added successfully!');
      setFormData({
        name: '',
        fatherName: '',
        contact: '',
        aadhar: '',
        address: '',
        gender: 'Male',
        shift: '',
        timing: '',
        monthlyFees: '',
        feesSubmit: '',
        seat: '',
        joiningDate: '2025-03-31',
        feesPaidTill: '2025-04-30',
        paymentMode: '',
        profilePicture: null,
      });
    } catch (err) {
      setMessage(err.response?.data?.msg || 'Error adding student. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex justify-between items-center px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Add New Student</h1>
            <p className="text-gray-600">Register a new student for study library access</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <div className="p-8">


        {/* Message Display */}
        {message && (
          <div className={`mb-6 p-4 rounded-lg ${
            message.includes('successfully') 
              ? 'bg-green-50 border border-green-200 text-green-700' 
              : 'bg-red-50 border border-red-200 text-red-700'
          }`}>
            {message}
          </div>
        )}

        {/* Main Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Profile Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Personal Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="flex space-x-2">
                    <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200 shadow-md">
                      Gallery
                    </button>
                    <button type="button" className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition duration-200 shadow-md">
                      Camera
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <InputField label="Name" name="name" value={formData.name} onChange={handleChange} maxLength="25" />
                  <InputField label="Father Name" name="fatherName" value={formData.fatherName} onChange={handleChange} maxLength="25" />
                  <InputField label="Contact" name="contact" value={formData.contact} onChange={handleChange} maxLength="10" />
                  <InputField label="Aadhar" name="aadhar" value={formData.aadhar} onChange={handleChange} maxLength="14" />
                  <div className="col-span-2">
                    <InputField label="Address" name="address" value={formData.address} onChange={handleChange} maxLength="30" />
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center space-x-6">
                      <span className="text-gray-700 font-medium">Gender:</span>
                      <label className="flex items-center text-gray-700">
                        <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} className="mr-2 text-blue-600" />
                        Male
                      </label>
                      <label className="flex items-center text-gray-700">
                        <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} className="mr-2 text-blue-600" />
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Study Plan Details Section */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Study Plan Details
              </h2>
              
              <div className="grid md:grid-cols-5 gap-4">
                <SelectField label="Study Plan" name="shift" value={formData.shift} onChange={handleChange} options={['Half Day (8 AM - 2 PM)', 'Half Day (2 PM - 8 PM)', 'Full Day (8 AM - 8 PM)']} />
                <SelectField label="Duration" name="timing" value={formData.timing} onChange={handleChange} options={['1 Month', '3 Months', '6 Months', '1 Year']} />
                <InputField label="Monthly Fees" name="monthlyFees" value={formData.monthlyFees} onChange={handleChange} />
                <button type="button" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-200 shadow-md h-10 mt-6">
                  Fees Submit
                </button>
                <button type="button" className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-200 shadow-md h-10 mt-6">
                  Select Seat
                </button>
              </div>
            </div>

            {/* Payment & Dates Section */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                Payment & Dates
              </h2>
              
              <div className="grid md:grid-cols-4 gap-4">
                <InputField label="Joining Date" name="joiningDate" value={formData.joiningDate} onChange={handleChange} type="date" />
                <InputField label="Fees Paid Till" name="feesPaidTill" value={formData.feesPaidTill} onChange={handleChange} type="date" />
                <SelectField label="Payment Mode" name="paymentMode" value={formData.paymentMode} onChange={handleChange} options={['Cash', 'Online', 'Card']} />
                <InputField label="Seat Number" name="seat" value={formData.seat} onChange={handleChange} />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button 
                type="submit" 
                disabled={loading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl text-lg transition duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Adding Student...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Register Student
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      </main>
    </>
  );
};

export default AddMember; 