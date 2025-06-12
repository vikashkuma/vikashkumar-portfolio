import { useState, useEffect, Suspense, lazy } from 'react';
import HeaderNav from './components/HeaderNav';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Awards = lazy(() => import('./components/Awards'));

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#awards', label: 'Awards' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const headerHeight = 120; // px, adjust if your header is taller/shorter
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll('section[id]'));
      const scrollPosition = window.scrollY + headerHeight + 1;
      let currentSection = sections[0]?.id || '';
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.id;
          break;
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set on mount

    // Scroll to top on initial load if no hash is present
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${isDark ? 'dark' : ''} bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-300 overflow-x-hidden w-full`}>
      <a href="#main-content" className="sr-only focus:not-sr-only bg-blue-900 text-white px-4 py-2 z-50 absolute top-2 left-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">Skip to main content</a>
      {/* Sticky Header */}
      <HeaderNav
        navLinks={navLinks}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isDark={isDark}
        setIsDark={setIsDark}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main id="main-content" className="flex-1 w-full" tabIndex={-1} aria-label="Main content">
        <Suspense fallback={<LoadingFallback />}>
          <Home />
          <Projects />
          <Skills />
          <Testimonials />
          <Awards />
          <Experience />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

export default App;
