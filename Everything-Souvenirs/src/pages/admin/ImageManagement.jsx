import React, { useState } from 'react';

const ImageManagement = () => {
  const images = [
    { id: 1, filename: 'promotional_mug.jpg', date: '2023-10-27', uploadedBy: 'AdminUser1', thumbnail: 'https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 2, filename: 'tshirt_design.png', date: '2023-10-26', uploadedBy: 'AdminUser2', thumbnail: 'https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 3, filename: 'pen_mockup.jpg', date: '2023-10-25', uploadedBy: 'AdminUser1', thumbnail: 'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 4, filename: 'stickers.png', date: '2023-10-24', uploadedBy: 'AdminUser3', thumbnail: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 5, filename: 'tote_bag.jpg', date: '2023-10-23', uploadedBy: 'AdminUser2', thumbnail: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=200' }
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-white">Image Management</h1>
        <button className="bg-purple-500/80 hover:bg-purple-500 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
          <span className="text-xl">+</span>
          Add New Image
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800">
          <h3 className="text-gray-400 text-sm mb-2">Total Images</h3>
          <p className="text-4xl font-bold text-white">1,234</p>
        </div>
        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800">
          <h3 className="text-gray-400 text-sm mb-2">Recent Orders</h3>
          <p className="text-4xl font-bold text-white">23</p>
        </div>
        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800">
          <h3 className="text-gray-400 text-sm mb-2">New User Signups</h3>
          <p className="text-4xl font-bold text-white">5</p>
        </div>
        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800">
          <h3 className="text-gray-400 text-sm mb-2">System Health</h3>
          <p className="text-4xl font-bold text-yellow-400">99.9%</p>
        </div>
      </div>

      <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left text-gray-400 font-medium px-6 py-4 uppercase text-sm">Image</th>
              <th className="text-left text-gray-400 font-medium px-6 py-4 uppercase text-sm">File Name</th>
              <th className="text-left text-gray-400 font-medium px-6 py-4 uppercase text-sm">Date Uploaded</th>
              <th className="text-left text-gray-400 font-medium px-6 py-4 uppercase text-sm">Uploaded By</th>
              <th className="text-left text-gray-400 font-medium px-6 py-4 uppercase text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {images.map((image) => (
              <tr key={image.id} className="border-b border-gray-800 hover:bg-[#242424] transition-colors">
                <td className="px-6 py-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-800">
                    <img
                      src={image.thumbnail}
                      alt={image.filename}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-300">{image.filename}</td>
                <td className="px-6 py-4 text-gray-400">{image.date}</td>
                <td className="px-6 py-4 text-gray-400">{image.uploadedBy}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-3">
                    <button className="text-gray-400 hover:text-white transition-colors">Edit</button>
                    <button className="text-red-400 hover:text-red-300 transition-colors">Delete</button>
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

export default ImageManagement;
