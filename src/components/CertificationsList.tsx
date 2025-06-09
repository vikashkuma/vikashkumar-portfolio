import React from 'react';

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    org: 'Amazon Web Services',
    year: '2022',
  },
  {
    name: 'Google Professional Cloud Developer',
    org: 'Google Cloud',
    year: '2021',
  },
  {
    name: 'Scrum Master Certified (SMC)',
    org: 'Scrum Alliance',
    year: '2020',
  },
];

const CertificationsList = () => (
  <div className="mt-12">
    <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Certifications</h3>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {certifications.map((cert) => (
        <li key={cert.name} className="bg-white/80 dark:bg-gray-800/80 rounded-lg shadow p-4 border border-gray-100 dark:border-gray-700">
          <span className="font-medium text-gray-900 dark:text-white">{cert.name}</span>
          <span className="block text-sm text-gray-500 dark:text-gray-400">{cert.org} &mdash; {cert.year}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default CertificationsList; 