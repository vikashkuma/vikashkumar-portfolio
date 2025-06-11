import { useState, useEffect } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import HeaderNav from './components/HeaderNav';
import Testimonials from './components/Testimonials';
import Awards from './components/Awards';

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
      window.scrollTo(0, 0);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${isDark ? 'dark' : ''} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300 overflow-x-hidden w-full`}>
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
      <main className="pt-16 sm:pt-20 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <Home />
        <Projects />
        <Skills />
        <Testimonials />
        <Awards />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
