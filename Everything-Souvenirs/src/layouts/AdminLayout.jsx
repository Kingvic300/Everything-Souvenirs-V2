import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  const location = useLocation();

  const navItems = [
    { path: '/admin/images', icon: 'IMG', label: 'Image Management' },
    { path: '/admin/orders', icon: 'ORD', label: 'Orders' },
    { path: '/admin/users', icon: 'USR', label: 'Users' },
    { path: '/admin/settings', icon: 'SET', label: 'Settings' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen bg-[#121212]">
      <aside className="w-64 bg-[#1a1a1a] border-r border-gray-800 flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
              $
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">Company Name</h2>
              <p className="text-gray-400 text-sm">Admin Portal</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all duration-200 ${
                isActive(item.path)
                  ? 'bg-[#2a2a2a] text-white'
                  : 'text-gray-400 hover:bg-[#242424] hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-[#242424] hover:text-white transition-all duration-200"
          >
            <span className="text-xl">OUT</span>
            <span className="font-medium">Logout</span>
          </Link>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
