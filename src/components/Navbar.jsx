'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#qualification' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[var(--background)]/70 border-b border-[var(--card-border)] transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-wider text-sky-500 dark:text-sky-400">
          SABBIR<span className="text-purple-500">.DEV</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-sky-500 transition-colors">
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-xl hover:scale-110 transition-all cursor-pointer"
          >
            {theme === 'dark' ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-indigo-600" />}
          </button>
        </div>

        {/* Mobile Hamburger & Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-lg"
          >
            {theme === 'dark' ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-indigo-600" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-[var(--foreground)]">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[var(--background)] border-b border-[var(--card-border)] px-6 py-4 space-y-3 absolute top-16 left-0 w-full shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium py-2 hover:text-sky-500"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}