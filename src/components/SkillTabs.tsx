import React from 'react';

interface SkillTabsProps {
  tabs: { label: string; key: string }[];
  activeTab: string;
  onTabChange: (key: string) => void;
}

const SkillTabs: React.FC<SkillTabsProps> = ({ tabs, activeTab, onTabChange }) => (
  <div className="flex justify-center mb-8 gap-2 flex-wrap">
    {tabs.map(tab => (
      <button
        key={tab.key}
        onClick={() => onTabChange(tab.key)}
        className={`px-4 py-2 rounded-t-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
          ${activeTab === tab.key ? 'bg-blue-500 text-white shadow' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900'}`}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

export default SkillTabs; 