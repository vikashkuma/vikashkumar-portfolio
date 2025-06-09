import ExperienceItem from './ExperienceItem';
import CertificationsList from './CertificationsList';

const experienceData = [
  {
    year: '2024',
    color: 'blue',
    title: 'Lead Software Development Engineer',
    org: 'EPAM Systems',
    time: 'Oct 2024 – Present · Bengaluru, Karnataka, India (Hybrid)',
    details: [
      'Leading development teams to deliver high-quality software solutions.',
      'Skills: Leading Development Teams',
    ],
  },
  {
    year: '2021',
    color: 'blue',
    title: 'Software Engineer III',
    org: 'Catchpoint',
    time: 'Dec 2021 – Oct 2024 · Bangalore Urban, Karnataka, India',
    details: [
      'Worked on performance monitoring and analytics solutions.',
      'Skills: JavaScript, React.js, TypeScript, Apollo GraphQL, Redux.js',
    ],
  },
  {
    year: '2019',
    color: 'blue',
    title: 'Software Engineer II',
    org: 'Catchpoint',
    time: 'Jun 2019 – Nov 2021 · Bengaluru, Karnataka, India',
    details: [
      'Full stack developer @ Catchpoint.',
      'Skills: JavaScript, React.js, TypeScript, Apollo GraphQL, Redux.js',
    ],
  },
  {
    year: '2018',
    color: 'blue',
    title: 'Software Engineer',
    org: 'Accure Inc.',
    time: 'Jun 2018 – May 2019 · Bangalore',
    details: [
      'Developed and integrated UI components for medical imaging solutions.',
      'Skills: JavaScript, React.js, Redux.js',
    ],
  },
  {
    year: '2016',
    color: 'blue',
    title: 'Associate Software Engineer',
    org: 'TechChefs Software Pvt Ltd',
    time: 'Jul 2016 – Jun 2018 · Bangalore',
    details: [
      'To enhance my career and contribute to software development projects.',
      'Skills: JavaScript',
    ],
  },
];

const educationData = [
  {
    year: '2015',
    color: 'purple',
    title: 'BTECH (CSE)',
    org: 'Future Institute of Engineering And Management, Kolkata',
    time: 'June 2011 — June 2015',
    details: ['CGPA: 7.53'],
  },
  {
    year: '2011',
    color: 'purple',
    title: 'Intermediate (Science)',
    org: '[Your School Name Here]',
    time: '2009 — 2011',
    details: [],
  },
  {
    year: '2009',
    color: 'purple',
    title: 'Metric',
    org: '[Your School Name Here]',
    time: '2007 — 2009',
    details: [],
  },
];

const Experience = () => (
  <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience & Education</h2>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-2 sm:ml-4">
        {experienceData.map((exp) => (
          <ExperienceItem
            key={exp.year + exp.title}
            year={exp.year}
            color={exp.color}
            title={exp.title}
            org={exp.org}
            time={exp.time}
            details={exp.details}
            bgColor="bg-blue-100"
            ringColor="dark:bg-blue-900"
            textColor="text-blue-600"
            orgBgColor="bg-blue-100"
            orgTextColor="text-blue-800"
          />
        ))}
        {educationData.map((edu) => (
          <ExperienceItem
            key={edu.year + edu.title}
            year={edu.year}
            color={edu.color}
            title={edu.title}
            org={edu.org}
            time={edu.time}
            details={edu.details}
            bgColor="bg-purple-100"
            ringColor="dark:bg-purple-900"
            textColor="text-purple-600"
            orgBgColor="bg-purple-100"
            orgTextColor="text-purple-800"
          />
        ))}
      </ol>
      <CertificationsList />
    </div>
  </section>
);

export default Experience; 