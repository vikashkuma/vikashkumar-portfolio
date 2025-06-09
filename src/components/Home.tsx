import { motion } from 'framer-motion';
import { ArrowDownIcon, EnvelopeIcon, ArrowDownTrayIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { useState, useRef, useEffect } from 'react';

const coverLetter = `Dear Hiring Manager,\n\nI am writing to express my interest in the Frontend Developer position at your esteemed organization. With over 8 years of experience in software engineering, I have developed a strong expertise in building innovative, scalable, and high-performance web applications, particularly in the domains of IoT, medical imaging, and performance monitoring.\n\nThroughout my career, I have demonstrated proficiency in React.js, TypeScript, JavaScript, and the full software development cycle. My recent role as a Senior Software Engineer at Catchpoint involved leading a team to design, develop, and deploy performance monitoring solutions using modern frameworks and technologies such as React, Redux, GraphQL, and Node.js. I have a proven track record of delivering user-centric applications, optimizing system performance, and mentoring junior developers to achieve project goals.\n\nMy experience also includes developing medical imaging solutions at Accure Pvt. Ltd., where I contributed to innovative healthcare applications, and building IoT platforms at Techchefs Software Pvt. Ltd., where I was responsible for UI development and API integration for smart home devices.\n\nI am passionate about staying at the forefront of technology, as evidenced by my participation in hackathons and continuous learning through courses in AI and ML. My technical skills are complemented by a strong foundation in Agile methodologies, user interface design, and a commitment to delivering high-quality software.\n\nI am excited about the opportunity to contribute my skills and experience to your team and help drive the success of your projects. Thank you for considering my application. I look forward to the possibility of discussing how I can add value to your organization.\n\nSincerely,\nVikash Kumar`;

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
            Senior Frontend Developer
          </span>
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-2 md:mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Hi, I'm Vikash Kumar
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 max-w-xl mx-auto"
        >
          Crafting exceptional digital experiences through clean code and innovative design.
          Specializing in React, TypeScript, and modern web technologies.
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center w-full max-w-2xl mx-auto mb-2 sm:mb-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors group min-w-[180px] focus:outline-blue-400 focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="View My Work section"
          >
            <ArrowDownIcon className="w-5 h-5" />
            <span>View My Work</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-900 transition-colors group min-w-[180px] focus:outline-blue-400 focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="Go to Contact section"
          >
            <EnvelopeIcon className="w-5 h-5" />
            <span>Get in Touch</span>
          </a>
          <a
            href="/vikash-kumar-resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-colors group min-w-[180px] focus:outline-blue-400 focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="Download Resume as PDF"
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
          <button
            type="button"
            ref={coverLetterButtonRef}
            onClick={() => setShowCoverLetter(true)}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors group min-w-[180px] focus:outline-blue-400 focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="View Cover Letter"
          >
            <DocumentTextIcon className="w-5 h-5" />
            <span>View Cover Letter</span>
          </button>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          variants={itemVariants}
          className="max-w-xl mx-auto mt-8 mb-6 sm:mt-10 sm:mb-8 px-4 py-5 rounded-xl bg-white/70 dark:bg-gray-800/70 shadow-md backdrop-blur-md border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-300">About Me</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
            Senior software engineer with 8+ years of experience in IoT, medical imaging, and performance monitoring domains. Proficient in React.js, TypeScript, JavaScript and the full software development cycle, with a strong focus on delivering innovative solutions in healthcare technology.
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 sm:gap-6 justify-center mt-6 sm:mt-8 md:mt-12"
        >
          <a
            href="https://github.com/vikashkuma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/vikash-kumar-verma/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href="https://x.com/RajaVicky007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
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