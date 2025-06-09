import React from 'react';

interface ExperienceItemProps {
  year: string;
  title: string;
  org: string;
  time: string;
  details: string[];
  bgColor?: string;
  ringColor?: string;
  textColor?: string;
  orgBgColor?: string;
  orgTextColor?: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  year,
  title,
  org,
  time,
  details,
  bgColor = 'bg-blue-100',
  ringColor = 'dark:bg-blue-900',
  textColor = 'text-blue-600',
  orgBgColor = 'bg-blue-100',
  orgTextColor = 'text-blue-800',
}) => (
  <li className="mb-10 ml-8 relative">
    <span className={`absolute flex items-center justify-center w-8 h-8 ${bgColor} rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 ${ringColor}`}>
      <span className={`${textColor} font-bold`}>{year}</span>
    </span>
    <h3 className="flex items-center mb-1 ml-8 text-lg font-semibold text-gray-900 dark:text-white">
      {title}
      <span className={`ml-3 ${orgBgColor} ${orgTextColor} text-xs font-medium mr-2 px-2.5 py-0.5 rounded`}>
        {org}
      </span>
    </h3>
    <time className="block mb-2 ml-8 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{time}</time>
    <ul className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400 list-disc pl-5">
      {details.map((d, i) => <li key={i}>{d}</li>)}
    </ul>
  </li>
);

export default ExperienceItem; 