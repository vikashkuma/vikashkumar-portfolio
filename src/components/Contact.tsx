import { useState } from 'react';
import content from '../content';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const c = content.contact;
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="w-full max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">{c.heading}</h2>
        {submitted ? (
          <div className="bg-green-100 text-green-800 p-6 rounded-lg text-center font-semibold">
            {c.thankYou}
          </div>
        ) : (
          <form
            action="https://formspree.io/f/mvgrkwra"
            method="POST"
            className="space-y-6"
            aria-label="Contact form"
            onSubmit={() => setSubmitted(true)}
          >
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-gray-700 dark:text-gray-200">{c.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-gray-700 dark:text-gray-200">{c.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium text-gray-700 dark:text-gray-200">{c.message}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Send message via contact form"
            >
              {c.send}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact; 