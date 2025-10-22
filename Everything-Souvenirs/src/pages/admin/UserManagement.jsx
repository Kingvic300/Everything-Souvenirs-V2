import React, { useState } from 'react';

const UserManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const users = [
    { id: 'USR-001', name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active', lastLogin: '2023-10-27 10:30 AM' },
    { id: 'USR-002', name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User', status: 'Active', lastLogin: '2023-10-26 08:45 PM' },
    { id: 'USR-003', name: 'Michael Johnson', email: 'michael.j@example.com', role: 'User', status: 'Inactive', lastLogin: '2023-09-15 03:12 PM' },
    { id: 'USR-004', name: 'Emily Davis', email: 'emily.d@example.com', role: 'User', status: 'Suspended', lastLogin: '2023-10-20 11:00 AM' },
    { id: 'USR-005', name: 'Chris Brown', email: 'chris.b@example.com', role: 'Admin', status: 'Active', lastLogin: '2023-10-27 09:05 AM' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-600/20 text-green-400';
      case 'Inactive':
        return 'bg-yellow-600/20 text-yellow-400';
      case 'Suspended':
        return 'bg-red-600/20 text-red-400';
      default:
        return 'bg-gray-600/20 text-gray-400';
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-white">User Management</h1>
        <button className="bg-purple-500/80 hover:bg-purple-500 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
          <span className="text-xl">+</span>
          Add New User
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#1a1a1a] text-white px-4 py-3 pl-12 rounded-lg border border-gray-700 focus:border-gray-600 focus:outline-none w-full"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">Q</span>
        </div>
        <button className="bg-[#1a1a1a] text-gray-400 px-6 py-3 rounded-lg border border-gray-700 hover:bg-[#242424] transition-colors flex items-center gap-2 whitespace-nowrap">
          Filter by Role
          <span>▼</span>
        </button>
        <button className="bg-[#1a1a1a] text-gray-400 px-6 py-3 rounded-lg border border-gray-700 hover:bg-[#242424] transition-colors flex items-center gap-2 whitespace-nowrap">
          Filter by Status
          <span>▼</span>
        </button>
      </div>

      <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left text-gray-400 font-medium px-6 py-4 uppercase text-sm">User ID</th>
              <th className="text-left text-gray-400 font-medium px-6 py-4 uppercase text-sm">Name</th>
              <th className="text-left text-gray-400 font-medium px-6 py-4 uppercase text-sm">Email</th>
              <th className="text-left text-gray-400 font-medium px-6 py-4 uppercase text-sm">Role</th>
              <th className="text-left text-gray-400 font-medium px-6 py-4 uppercase text-sm">Status</th>
              <th className="text-left text-gray-400 font-medium px-6 py-4 uppercase text-sm">Last Login</th>
              <th className="text-left text-gray-400 font-medium px-6 py-4 uppercase text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-800 hover:bg-[#242424] transition-colors">
                <td className="px-6 py-4 text-gray-300">{user.id}</td>
                <td className="px-6 py-4 text-white font-medium">{user.name}</td>
                <td className="px-6 py-4 text-gray-400">{user.email}</td>
                <td className="px-6 py-4 text-gray-300">{user.role}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-400">{user.lastLogin}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-4 items-center">
                    <button className="text-yellow-400 hover:text-yellow-300 transition-colors">Edit</button>
                    <button className="text-yellow-400 hover:text-yellow-300 transition-colors">Del</button>
                    <button className="text-yellow-400 hover:text-yellow-300 transition-colors">...</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
