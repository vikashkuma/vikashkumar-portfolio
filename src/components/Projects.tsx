import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import content from '../content';

const projects = content.projects;

// Add a mapping from tag/library to official documentation URL
const docLinks: { [key: string]: string } = {
  'React': 'https://react.dev/',
  'Node.js': 'https://nodejs.org/en/docs/',
  'MongoDB': 'https://www.mongodb.com/docs/',
  'Stripe': 'https://stripe.com/docs',
  'TypeScript': 'https://www.typescriptlang.org/docs/',
  'Firebase': 'https://firebase.google.com/docs',
  'Tailwind': 'https://tailwindcss.com/docs',
  'Python': 'https://docs.python.org/3/',
  'TensorFlow': 'https://www.tensorflow.org/learn',
  'D3.js': 'https://d3js.org/',
};

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-6 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {content.projectsSection.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            {content.projectsSection.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag) => (
                    docLinks[tag] ? (
                      <a
                        key={tag}
                        href={docLinks[tag]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-0.5 sm:py-1 text-xs sm:text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                        title={`Official ${tag} Documentation`}
                      >
                        {tag}
                      </a>
                    ) : (
                      <span
                        key={tag}
                        className="px-2 py-0.5 sm:py-1 text-xs sm:text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                      >
                        {tag}
                      </span>
                    )
                  ))}
                </div>

                <div className="flex gap-3 sm:gap-4 mt-auto pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs sm:text-sm md:text-base text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  >
                    <CodeBracketIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 