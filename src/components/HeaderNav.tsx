import { motion, AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import content from '../content';

interface NavLink {
  href: string;
  label: string;
}

interface HeaderNavProps {
  navLinks: NavLink[];
  activeSection: string;
  setActiveSection: (section: string) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const HeaderNav: React.FC<HeaderNavProps> = ({
  navLinks,
  activeSection,
  setActiveSection,
  isDark,
  setIsDark,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <nav className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="font-bold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          VK
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {content.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActiveSection(link.href.replace('#', ''))}
                  className={`relative font-medium transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-blue-800 dark:text-blue-200'
                      : 'text-gray-900 dark:text-gray-100 hover:text-blue-800 dark:hover:text-blue-200'
                  }`}
                  aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
                >
                  {link.label}
                  {(activeSection === link.href.replace('#', '') || (activeSection === '' && link.href === '#home')) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400" />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <SunIcon className="w-5 h-5 text-yellow-500" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="flex md:hidden items-center gap-2 sm:gap-4">
          <button
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <SunIcon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
            ) : (
              <MoonIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Bars3Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <ul className="container mx-auto px-4 py-3 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActiveSection(link.href.replace('#', ''))}
                  className={`block py-2 font-medium text-base transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default HeaderNav; 