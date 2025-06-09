import React from 'react';
import { TrophyIcon, StarIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

const awards = [
  {
    icon: TrophyIcon,
    title: 'Hackathon Winner',
    description: 'Won multiple internal hackathons at Catchpoint for innovative solutions in performance monitoring and dashboard design.',
    date: '2022, 2023'
  },
  {
    icon: StarIcon,
    title: 'Employee of the Month',
    description: 'Recognized as Employee of the Month at Accure Inc. for outstanding contributions to medical imaging projects.',
    date: '2019'
  },
  {
    icon: AcademicCapIcon,
    title: 'AI & ML Course Completion',
    description: 'Successfully completed AI and ML certification from Udemy, demonstrating commitment to continuous learning.',
    date: '2021'
  }
];

const Awards = () => (
  <section id="awards" className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl font-semibold mb-8 text-center">Awards & Achievements</h3>
      <div className="grid gap-8 sm:grid-cols-2">
        {awards.map(({ icon: Icon, title, description, date }, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col h-full border border-gray-100 dark:border-gray-700">
            <Icon className="w-10 h-10 text-yellow-500 mb-4" />
            <div className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{title}</div>
            <div className="text-gray-700 dark:text-gray-200 mb-2 flex-grow">{description}</div>
            {date && <div className="text-xs text-gray-500 dark:text-gray-400 mt-auto">{date}</div>}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Awards; 