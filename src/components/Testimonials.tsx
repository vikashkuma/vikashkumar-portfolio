import React from 'react';

const testimonials = [
  {
    quote: "Vikash is a highly skilled engineer who consistently delivers high-quality work. His attention to detail and ability to solve complex problems make him a valuable asset to any team.",
    name: "Ankit Sharma",
    title: "Engineering Manager, Catchpoint"
  },
  {
    quote: "Working with Vikash was a pleasure. He brings innovative solutions to the table and is always willing to help others grow.",
    name: "Priya Singh",
    title: "Lead Developer, Accure Inc."
  },
  {
    quote: "Vikash's expertise in frontend technologies and his leadership skills have been instrumental in the success of our projects.",
    name: "Rahul Verma",
    title: "Project Manager, EPAM Systems"
  }
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl font-semibold mb-8 text-center">Testimonials</h3>
      <div className="grid gap-8 sm:grid-cols-2">
        {testimonials.map(({ quote, name, title }, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col h-full border border-gray-100 dark:border-gray-700">
            <svg className="w-8 h-8 text-blue-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m2 0a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v4a2 2 0 002 2h2m0 0v4m0 0h4m-4 0a2 2 0 01-2-2" /></svg>
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