import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAngular, FaBootstrap, FaJenkins, FaNpm } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiGraphql, SiMongodb, SiJest, SiWebpack, SiD3Dotjs, SiFigma, SiGo, SiExpress, SiApollographql, SiTerraform } from 'react-icons/si';

const skillTabs = [
  {
    label: 'Frontend',
    key: 'frontend',
    skills: [
      { name: 'HTML5', icon: FaHtml5, url: 'https://developer.mozilla.org/docs/Web/HTML' },
      { name: 'CSS3', icon: FaCss3Alt, url: 'https://developer.mozilla.org/docs/Web/CSS' },
      { name: 'JavaScript', icon: FaJs, url: 'https://developer.mozilla.org/docs/Web/JavaScript' },
      { name: 'TypeScript', icon: SiTypescript, url: 'https://www.typescriptlang.org/docs/' },
      { name: 'React', icon: FaReact, url: 'https://react.dev/' },
      { name: 'Redux', icon: SiRedux, url: 'https://redux.js.org/' },
      { name: 'GraphQL', icon: SiGraphql, url: 'https://graphql.org/learn/' },
      { name: 'Apollo', icon: SiApollographql, url: 'https://www.apollographql.com/docs/' },
      { name: 'Angular', icon: FaAngular, url: 'https://angular.io/docs' },
      { name: 'Bootstrap', icon: FaBootstrap, url: 'https://getbootstrap.com/docs/' },
      { name: 'D3.js', icon: SiD3Dotjs, url: 'https://d3js.org/' },
    ],
  },
  {
    label: 'Backend',
    key: 'backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, url: 'https://nodejs.org/en/docs/' },
      { name: 'Express', icon: SiExpress, url: 'https://expressjs.com/' },
      { name: 'MongoDB', icon: SiMongodb, url: 'https://www.mongodb.com/docs/' },
      { name: 'Go', icon: SiGo, url: 'https://go.dev/doc/' },
      { name: 'GraphQL', icon: SiGraphql, url: 'https://graphql.org/learn/' },
      { name: 'Apollo', icon: SiApollographql, url: 'https://www.apollographql.com/docs/' },
    ],
  },
  {
    label: 'Tools/DevOps',
    key: 'tools',
    skills: [
      { name: 'Git', icon: FaGitAlt, url: 'https://git-scm.com/doc' },
      { name: 'Docker', icon: FaDocker, url: 'https://docs.docker.com/' },
      { name: 'Jenkins', icon: FaJenkins, url: 'https://www.jenkins.io/doc/' },
      { name: 'NPM', icon: FaNpm, url: 'https://docs.npmjs.com/' },
      { name: 'Webpack', icon: SiWebpack, url: 'https://webpack.js.org/concepts/' },
      { name: 'Jest', icon: SiJest, url: 'https://jestjs.io/docs/getting-started' },
      { name: 'Terraform', icon: SiTerraform, url: 'https://developer.hashicorp.com/terraform/docs' },
    ],
  },
  {
    label: 'Other',
    key: 'other',
    skills: [
      { name: 'Figma', icon: SiFigma, url: 'https://help.figma.com/hc/en-us' },
      { name: 'Agile/Scrum', icon: SiFigma, url: 'https://www.scrum.org/resources/what-is-scrum' },
    ],
  },
];

const techStack = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'JavaScript', level: 95 },
  { name: 'Redux', level: 90 },
  { name: 'GraphQL', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Express', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'Jest', level: 80 },
  { name: 'Docker', level: 70 },
  { name: 'Git', level: 90 },
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 90 },
  { name: 'Bootstrap', level: 80 },
  { name: 'Angular', level: 70 },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const currentSkills = skillTabs.find(tab => tab.key === activeTab)?.skills || [];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        {/* Skills Sub-Tabs */}
        <div className="flex justify-center mb-8 gap-2 flex-wrap">
          {skillTabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-t-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                ${activeTab === tab.key ? 'bg-blue-500 text-white shadow' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
          {currentSkills.map(({ name, icon: Icon, url }) => (
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
        {/* Tech Stack Proficiency Bars */}
        <div className="mt-12 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Tech Stack Proficiency</h3>
          <div className="space-y-5">
            {techStack
              .filter(stack => currentSkills.some(skill => skill.name === stack.name))
              .map(({ name, level }) => (
                <div key={name} className="flex flex-col gap-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-200">{name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-3 rounded-full bg-blue-600 transition-all duration-700"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 