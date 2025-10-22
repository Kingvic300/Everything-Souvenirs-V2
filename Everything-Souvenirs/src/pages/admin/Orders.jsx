import React, { useState } from 'react';

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const orders = [
    { id: 10542, customer: 'John Doe', date: '2023-10-28', status: 'Shipped', items: 5, total: 250.00 },
    { id: 10541, customer: 'Jane Smith', date: '2023-10-27', status: 'Processing', items: 2, total: 120.50 },
    { id: 10540, customer: 'Michael Johnson', date: '2023-10-27', status: 'Delivered', items: 10, total: 580.00 },
    { id: 10539, customer: 'Emily Davis', date: '2023-10-26', status: 'Cancelled', items: 3, total: 75.20 },
    { id: 10538, customer: 'Chris Lee', date: '2023-10-25', status: 'Delivered', items: 1, total: 45.00 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Shipped':
        return 'bg-green-600/20 text-green-400';
      case 'Processing':
        return 'bg-yellow-600/20 text-yellow-400';
      case 'Delivered':
        return 'bg-blue-600/20 text-blue-400';
      case 'Cancelled':
        return 'bg-red-600/20 text-red-400';
      default:
        return 'bg-gray-600/20 text-gray-400';
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-white">Orders</h1>
        <div className="flex gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#1a1a1a] text-white px-4 py-3 pl-12 rounded-lg border border-gray-700 focus:border-gray-600 focus:outline-none w-80"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">Q</span>
          </div>
          <button className="bg-[#1a1a1a] text-yellow-400 px-6 py-3 rounded-lg border border-gray-700 hover:bg-[#242424] transition-colors flex items-center gap-2">
            <span>F</span>
            Filter
          </button>
          <button className="bg-[#1a1a1a] text-yellow-400 px-6 py-3 rounded-lg border border-gray-700 hover:bg-[#242424] transition-colors flex items-center gap-2">
            <span>S</span>
            Sort
          </button>
        </div>
      </div>

      <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left text-gray-400 font-medium px-6 py-4 uppercase text-sm">Order ID</th>
              <th className="text-left text-gray-400 font-medium px-6 py-4 uppercase text-sm">Customer Name</th>
              <th className="text-left text-gray-400 font-medium px-6 py-4 uppercase text-sm">Date</th>
              <th className="text-left text-gray-400 font-medium px-6 py-4 uppercase text-sm">Status</th>
              <th className="text-left text-gray-400 font-medium px-6 py-4 uppercase text-sm">Items</th>
              <th className="text-left text-gray-400 font-medium px-6 py-4 uppercase text-sm">Total</th>
              <th className="text-left text-gray-400 font-medium px-6 py-4 uppercase text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-800 hover:bg-[#242424] transition-colors">
                <td className="px-6 py-4 text-white font-medium">#{order.id}</td>
                <td className="px-6 py-4 text-gray-300">{order.customer}</td>
                <td className="px-6 py-4 text-gray-400">{order.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-300">{order.items}</td>
                <td className="px-6 py-4 text-white font-medium">${order.total.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <button className="bg-purple-500/80 hover:bg-purple-500 text-white px-4 py-2 rounded-lg transition-colors">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-gray-400">Showing 1 to 5 of 123 orders</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-[#1a1a1a] text-gray-400 rounded-lg border border-gray-800 hover:bg-[#242424]">
            &lt;
          </button>
          <button className="px-4 py-2 bg-purple-500/80 text-white rounded-lg">1</button>
          <button className="px-4 py-2 bg-[#1a1a1a] text-gray-400 rounded-lg border border-gray-800 hover:bg-[#242424]">
            2
          </button>
          <button className="px-4 py-2 bg-[#1a1a1a] text-gray-400 rounded-lg border border-gray-800 hover:bg-[#242424]">
            3
          </button>
          <button className="px-4 py-2 bg-[#1a1a1a] text-gray-400 rounded-lg border border-gray-800 hover:bg-[#242424]">
            ...
          </button>
          <button className="px-4 py-2 bg-[#1a1a1a] text-gray-400 rounded-lg border border-gray-800 hover:bg-[#242424]">
            25
          </button>
          <button className="px-4 py-2 bg-[#1a1a1a] text-gray-400 rounded-lg border border-gray-800 hover:bg-[#242424]">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
