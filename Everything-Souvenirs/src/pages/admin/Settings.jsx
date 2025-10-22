import React, { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [siteName, setSiteName] = useState('Company Name');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [timezone, setTimezone] = useState('(UTC-08:00) Pacific Time (US & Canada)');
  const [accentColor, setAccentColor] = useState('#ffd700');

  const tabs = [
    { id: 'general', icon: 'G', label: 'General' },
    { id: 'notifications', icon: 'N', label: 'Notifications' },
    { id: 'integrations', icon: 'I', label: 'Integrations' },
    { id: 'permissions', icon: 'P', label: 'Permissions' }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your application settings and configurations.</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <div className="bg-[#1a1a1a] rounded-lg border border-gray-800 overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-all duration-200 border-l-4 ${
                  activeTab === tab.id
                    ? 'bg-[#2a2a2a] border-yellow-400 text-white'
                    : 'border-transparent text-gray-400 hover:bg-[#242424] hover:text-white'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="col-span-9">
          {activeTab === 'general' && (
            <div className="bg-[#1a1a1a] rounded-lg border border-gray-800 p-8">
              <h2 className="text-2xl font-bold text-white mb-2">General Settings</h2>
              <p className="text-gray-400 mb-8">Configure basic application settings.</p>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2">Site Name</label>
                  <input
                    type="text"
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                    className="w-full bg-[#0f0f0f] text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-gray-600 focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-between py-4 border-b border-gray-800">
                  <div>
                    <label className="block text-gray-400 mb-1">Maintenance Mode</label>
                    <p className="text-sm text-gray-500">Enable maintenance mode</p>
                  </div>
                  <button
                    onClick={() => setMaintenanceMode(!maintenanceMode)}
                    className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${
                      maintenanceMode ? 'bg-white' : 'bg-gray-700'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-6 h-6 bg-[#0f0f0f] rounded-full transition-transform duration-200 ${
                        maintenanceMode ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Timezone</label>
                  <select
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="w-full bg-[#0f0f0f] text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-gray-600 focus:outline-none appearance-none cursor-pointer"
                  >
                    <option value="(UTC-08:00) Pacific Time (US & Canada)">(UTC-08:00) Pacific Time (US & Canada)</option>
                    <option value="(UTC-05:00) Eastern Time (US & Canada)">(UTC-05:00) Eastern Time (US & Canada)</option>
                    <option value="(UTC+00:00) UTC">(UTC+00:00) UTC</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-400 mb-2">
                    <span className="text-yellow-400">Color</span>
                    Accent Color
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="flex-1 bg-[#0f0f0f] text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-gray-600 focus:outline-none"
                    />
                    <div
                      className="w-14 h-12 rounded-lg border-2 border-gray-700 cursor-pointer"
                      style={{ backgroundColor: accentColor }}
                      onClick={() => document.getElementById('colorPicker').click()}
                    />
                    <input
                      id="colorPicker"
                      type="color"
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="hidden"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-6">
                  <button className="bg-purple-500/80 hover:bg-purple-500 text-white px-8 py-3 rounded-lg transition-colors flex items-center gap-2">
                    <span>Save</span>
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="bg-[#1a1a1a] rounded-lg border border-gray-800 p-8">
              <h2 className="text-2xl font-bold text-white mb-2">Notification Settings</h2>
              <p className="text-gray-400 mb-8">Manage your notification preferences.</p>
              <p className="text-gray-500">Notification settings coming soon...</p>
            </div>
          )}

          {activeTab === 'integrations' && (
            <div className="bg-[#1a1a1a] rounded-lg border border-gray-800 p-8">
              <h2 className="text-2xl font-bold text-white mb-2">Integration Settings</h2>
              <p className="text-gray-400 mb-8">Connect third-party services.</p>
              <p className="text-gray-500">Integration settings coming soon...</p>
            </div>
          )}

          {activeTab === 'permissions' && (
            <div className="bg-[#1a1a1a] rounded-lg border border-gray-800 p-8">
              <h2 className="text-2xl font-bold text-white mb-2">Permission Settings</h2>
              <p className="text-gray-400 mb-8">Manage user roles and permissions.</p>
              <p className="text-gray-500">Permission settings coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
