// src/components/Header.tsx
import React from 'react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onSearch: (query: string) => void;
}

const tabs = [
  'Articles',
  'Personal Blog',
  'Guides',
  'Tutorials'
];

const subTabs = [
  'Generated Articles',
  'Published Articles',
  'Scheduled Articles',
  'Archived Articles'
];

const Header: React.FC<HeaderProps> = ({ currentTab, setCurrentTab, onSearch }) => {
  return (
    <div className="bg-white px-6 py-4 shadow-sm border-b">
      {/* Top Heading Based on Tab */}
      <h1 className="text-2xl font-bold mb-4">{currentTab}</h1>

      {/* Top Category Tabs */}
      <div className="flex space-x-4 mb-4">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 rounded ${currentTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-blue-100'}`}
            onClick={() => setCurrentTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Sub Tabs */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          {subTabs.map((subTab, index) => (
            <button
              key={index}
              className="text-sm px-3 py-1 rounded hover:bg-gray-200 bg-gray-100 text-gray-800"
            >
              {subTab}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for Title & Keywords..."
          className="px-3 py-2 border rounded-md w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;
