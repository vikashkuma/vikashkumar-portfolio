import { TrophyIcon, StarIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import content from '../content';

const iconMap = {
  trophy: TrophyIcon,
  star: StarIcon,
  academicCap: AcademicCapIcon,
};

const awards = content.awards;

const Awards = () => (
  <section id="awards" className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-center">Awards & Achievements</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {awards.map(({ icon, title, description, date }, idx) => {
          const Icon = iconMap[icon as keyof typeof iconMap];
          return (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col h-full border border-gray-100 dark:border-gray-700">
              <Icon className="w-10 h-10 text-yellow-500 mb-4" aria-hidden="true" focusable="false" />
              <div className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{title}</div>
              <div className="text-gray-700 dark:text-gray-200 mb-2 flex-grow">{description}</div>
              {date && <div className="text-xs text-gray-500 dark:text-gray-400 mt-auto">{date}</div>}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Awards; 