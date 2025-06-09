import content from '../content';

const HomeHeader = () => (
  <>
    <div className="mb-2 sm:mb-2 md:mb-3">
      <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs sm:text-sm font-medium">
        {content.hero.role}
      </span>
    </div>
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-2 md:mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      {content.hero.heading}
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 max-w-xl mx-auto">
      {content.hero.description}
    </p>
  </>
);

export default HomeHeader; 