import React from 'react';
import UserInfo from './UserInfo';

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723a9ce6890?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <UserInfo />
    </div>
  );
};

export default Dashboard;
