import { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiJest, SiCypress, SiGithubactions, SiGitlab, SiVercel, SiNetlify, SiHelm, SiKubernetes, SiWebpack, SiEslint, SiStorybook, SiFirebase, SiGraphql, SiLangchain } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { PiGraph } from 'react-icons/pi';
import { BsRobot } from 'react-icons/bs';

interface SkillTab {
  label: string;
  key: string;
}

interface Skill {
  name: string;
  tab: string;
  proficiency: number;
}

const skillTabs: SkillTab[] = [
  { label: 'Frontend', key: 'frontend' },
  { label: 'Backend', key: 'backend' },
  { label: 'DevOps/Deployment', key: 'devops' },
  { label: 'Testing', key: 'testing' },
  { label: 'AI/GenAI', key: 'ai' },
  { label: 'Others', key: 'others' },
];

const skills: Skill[] = [
  // Frontend
  { name: 'React', tab: 'frontend', proficiency: 95 },
  { name: 'Next.js', tab: 'frontend', proficiency: 90 },
  { name: 'TypeScript', tab: 'frontend', proficiency: 90 },
  { name: 'TailwindCSS', tab: 'frontend', proficiency: 85 },
  { name: 'Design Systems', tab: 'frontend', proficiency: 80 },
  { name: 'Accessibility', tab: 'frontend', proficiency: 80 },
  // Backend
  { name: 'Node.js', tab: 'backend', proficiency: 85 },
  { name: 'Express', tab: 'backend', proficiency: 80 },
  { name: 'MongoDB', tab: 'backend', proficiency: 80 },
  { name: 'PostgreSQL', tab: 'backend', proficiency: 70 },
  { name: 'REST', tab: 'backend', proficiency: 85 },
  { name: 'GraphQL', tab: 'backend', proficiency: 75 },
  // DevOps/Deployment
  { name: 'Docker', tab: 'devops', proficiency: 80 },
  { name: 'GitHub Actions', tab: 'devops', proficiency: 75 },
  { name: 'GitLab', tab: 'devops', proficiency: 70 },
  { name: 'Vercel', tab: 'devops', proficiency: 80 },
  { name: 'Netlify', tab: 'devops', proficiency: 75 },
  { name: 'Helm', tab: 'devops', proficiency: 60 },
  { name: 'Kubernetes', tab: 'devops', proficiency: 50 },
  // Testing
  { name: 'Jest', tab: 'testing', proficiency: 80 },
  { name: 'React Testing Library', tab: 'testing', proficiency: 75 },
  { name: 'Cypress', tab: 'testing', proficiency: 70 },
  // AI/GenAI
  { name: 'GPT-4 API', tab: 'ai', proficiency: 70 },
  { name: 'LangChain', tab: 'ai', proficiency: 60 },
  { name: 'RAG architecture basics', tab: 'ai', proficiency: 60 },
  { name: 'Prompt engineering', tab: 'ai', proficiency: 65 },
  // Others
  { name: 'Git', tab: 'others', proficiency: 90 },
  { name: 'Webpack', tab: 'others', proficiency: 70 },
  { name: 'ESLint', tab: 'others', proficiency: 80 },
  { name: 'Storybook', tab: 'others', proficiency: 70 },
  { name: 'Firebase', tab: 'others', proficiency: 70 },
];

const getIcon = (name: string) => {
  const icons: { [key: string]: JSX.Element } = {
    React: <FaReact className="w-6 h-6" />,
    'Next.js': <SiNextdotjs className="w-6 h-6" />,
    TypeScript: <SiTypescript className="w-6 h-6" />,
    TailwindCSS: <SiTailwindcss className="w-6 h-6" />,
    'Design Systems': <TbBrandReactNative className="w-6 h-6" />,
    Accessibility: <PiGraph className="w-6 h-6" />,
    'Node.js': <FaNodeJs className="w-6 h-6" />,
    Express: <SiExpress className="w-6 h-6" />,
    MongoDB: <SiMongodb className="w-6 h-6" />,
    PostgreSQL: <SiPostgresql className="w-6 h-6" />,
    REST: <FaJs className="w-6 h-6" />,
    GraphQL: <SiGraphql className="w-6 h-6" />,
    Docker: <FaDocker className="w-6 h-6" />,
    'GitHub Actions': <SiGithubactions className="w-6 h-6" />,
    GitLab: <SiGitlab className="w-6 h-6" />,
    Vercel: <SiVercel className="w-6 h-6" />,
    Netlify: <SiNetlify className="w-6 h-6" />,
    Helm: <SiHelm className="w-6 h-6" />,
    Kubernetes: <SiKubernetes className="w-6 h-6" />,
    Jest: <SiJest className="w-6 h-6" />,
    'React Testing Library': <FaReact className="w-6 h-6" />,
    Cypress: <SiCypress className="w-6 h-6" />,
    'GPT-4 API': <BsRobot className="w-6 h-6" />,
    LangChain: <SiLangchain className="w-6 h-6" />,
    'RAG architecture basics': <BsRobot className="w-6 h-6" />,
    'Prompt engineering': <BsRobot className="w-6 h-6" />,
    Git: <FaGitAlt className="w-6 h-6" />,
    Webpack: <SiWebpack className="w-6 h-6" />,
    ESLint: <SiEslint className="w-6 h-6" />,
    Storybook: <SiStorybook className="w-6 h-6" />,
    Firebase: <SiFirebase className="w-6 h-6" />,
  };
  return icons[name] || null;
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {skillTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                activeTab === tab.key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills
            .filter((skill) => skill.tab === activeTab)
            .map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
              >
                {getIcon(skill.name)}
                <span className="mt-2 font-medium text-gray-900 dark:text-white text-center">
                  {skill.name}
                </span>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500 mt-1">{skill.proficiency}%</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 