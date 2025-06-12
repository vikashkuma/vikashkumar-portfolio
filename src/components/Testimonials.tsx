import content from '../content';

const testimonials = content.testimonials;

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-center">Testimonials</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {testimonials.map(({ quote, name, title }, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col h-full border border-gray-100 dark:border-gray-700">
            <svg className="w-8 h-8 text-blue-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m2 0a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v4a2 2 0 002 2h2m0 0v4m0 0h4m-4 0a2 2 0 01-2-2" /></svg>
            <p className="text-gray-700 dark:text-gray-200 italic mb-4 flex-grow">"{quote}"</p>
            <div className="mt-auto">
              <span className="font-semibold text-blue-700 dark:text-blue-300">{name}</span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">{title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 