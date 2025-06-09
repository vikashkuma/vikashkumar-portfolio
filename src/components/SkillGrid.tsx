import React from 'react';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
}

interface SkillGridProps {
  skills: Skill[];
}

const SkillGrid: React.FC<SkillGridProps> = ({ skills }) => (
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
    {skills.map(({ name, icon: Icon, url }) => (
      <a
        key={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center cursor-pointer"
        title={name}
      >
        <Icon
          className="w-8 h-8 sm:w-10 sm:h-10 mb-2 text-gray-400 group-hover:text-blue-600 transition-colors duration-200"
        />
        <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 group-hover:text-blue-600 transition-colors duration-200">
          {name}
        </span>
      </a>
    ))}
  </div>
);

export default SkillGrid; 