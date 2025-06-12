import content from '../content';
import ExperienceItem from './ExperienceItem';
import CertificationsList from './CertificationsList';

const experienceData = content.experience;
const educationData = content.education;

const Experience = () => (
  <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience & Education</h2>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-2 sm:ml-4">
        {experienceData.map((exp) => (
          <ExperienceItem
            key={exp.year + exp.title}
            year={exp.year}
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