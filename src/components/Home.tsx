import { motion } from 'framer-motion';
import { ArrowDownIcon, EnvelopeIcon, ArrowDownTrayIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { useState, useRef, useEffect } from 'react';
import content from '../content';

const coverLetter = content.hero.coverLetter;

const Home = () => {
  const [showCoverLetter, setShowCoverLetter] = useState(false);
  const coverLetterButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Trap focus in modal and close on Esc
  useEffect(() => {
    if (showCoverLetter) {
      const node = modalRef.current;
      const focusable = node ? (node.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<HTMLElement>) : null;
      const first = focusable?.[0];
      const last = focusable && focusable.length > 0 ? focusable[focusable.length - 1] : null;
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setShowCoverLetter(false);
        }
        if (e.key === 'Tab' && focusable && focusable.length > 0) {
          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              if (last) last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              if (first) first.focus();
            }
          }
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      setTimeout(() => { if (first) first.focus(); }, 0);
      return () => document.removeEventListener('keydown', handleKeyDown);
    } else {
      if (coverLetterButtonRef.current) coverLetterButtonRef.current.focus();
    }
  }, [showCoverLetter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 scroll-mt-[120px]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 -z-10" />
      
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-2xl mx-auto px-2 sm:px-4 flex flex-col items-center"
      >
        {/* Profile Photo */}
        <motion.div variants={itemVariants} className="flex justify-center mb-2 sm:mb-3 mt-0">
          <img
            src="/profile.jpg"
            alt="Vikash Kumar profile"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          />
        </motion.div>
        <motion.div variants={itemVariants} className="mb-2 sm:mb-2 md:mb-3">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs sm:text-sm font-medium">
            {content.hero.role}
          </span>
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-2 md:mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          {content.hero.heading}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 max-w-xl mx-auto"
        >
          {content.hero.description}
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center w-full max-w-2xl mx-auto mb-2 sm:mb-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors group min-w-[180px] focus:outline-blue-400 focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label={content.hero.cta.work}
          >
            <ArrowDownIcon className="w-5 h-5" />
            <span>{content.hero.cta.work}</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-900 transition-colors group min-w-[180px] focus:outline-blue-400 focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label={content.hero.cta.contact}
          >
            <EnvelopeIcon className="w-5 h-5" />
            <span>{content.hero.cta.contact}</span>
          </a>
          <a
            href={content.hero.cta.resumeUrl}
            download
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-colors group min-w-[180px] focus:outline-blue-400 focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label={content.hero.cta.resume}
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
            <span>{content.hero.cta.resume}</span>
          </a>
          <button
            type="button"
            ref={coverLetterButtonRef}
            onClick={() => setShowCoverLetter(true)}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors group min-w-[180px] focus:outline-blue-400 focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label={content.hero.cta.coverLetter}
          >
            <DocumentTextIcon className="w-5 h-5" />
            <span>{content.hero.cta.coverLetter}</span>
          </button>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          variants={itemVariants}
          className="max-w-xl mx-auto mt-8 mb-6 sm:mt-10 sm:mb-8 px-4 py-5 rounded-xl bg-white/70 dark:bg-gray-800/70 shadow-md backdrop-blur-md border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-300">{content.hero.aboutSection.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
            {content.hero.aboutSection.description}
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 sm:gap-6 justify-center mt-6 sm:mt-8 md:mt-12"
        >
          {content.hero.social.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label={link.aria}
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Cover Letter Modal */}
        {showCoverLetter && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            onClick={() => setShowCoverLetter(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cover-letter-title"
            aria-describedby="cover-letter-desc"
          >
            <div
              className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full p-8 relative"
              onClick={e => e.stopPropagation()}
              ref={modalRef}
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl focus:outline-blue-400 focus-visible:ring-2 focus-visible:ring-blue-400"
                onClick={() => setShowCoverLetter(false)}
                aria-label="Close Cover Letter Modal"
              >
                &times;
              </button>
              <h3 id="cover-letter-title" className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300">Cover Letter</h3>
              <div id="cover-letter-desc" className="max-h-[60vh] overflow-y-auto pr-2">
                <pre className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 text-base font-sans leading-relaxed">{coverLetter}</pre>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Home; 