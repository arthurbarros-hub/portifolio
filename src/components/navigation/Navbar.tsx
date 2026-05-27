'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdClose } from 'react-icons/md';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

const navLinks = [
  { label: 'Início', href: '#' },
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Tecnologias', href: '#tech' },
  { label: 'Reconhecimento', href: '#achievements' },
  { label: 'Contato', href: '#contact' },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/arthurbarros-hub',
    icon: SiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/arthur-mansur',
    icon: FaLinkedin,
  },
];

export const Navbar = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
      return;
    }

    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <nav
        className={`relative px-6 sm:px-8 py-4 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/40 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link
              href="#"
              onClick={(e) => smoothScroll(e, '#')}
              className="relative z-50 flex-shrink-0"
              aria-label="Arthur Mansur - Home"
            >
              <motion.div
                className="font-semibold text-white text-lg sm:text-base tracking-tight"
                whileHover={{ color: '#3b82f6' }}
                transition={{ duration: 0.2 }}
              >
                <span className="hidden sm:inline">ARTHUR MANSUR</span>
                <span className="sm:hidden">AM.DEV</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => smoothScroll(e, link.href)}
                  className="relative px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors duration-200 group"
                  aria-label={`Navegar para ${link.label}`}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden lg:flex items-center gap-2 ml-auto">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                    aria-label={social.label}
                    whileHover={
                      !prefersReducedMotion ? { scale: 1.1, y: -2 } : {}
                    }
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <MdClose size={24} /> : <RxHamburgerMenu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -10 }
                }
                animate={
                  prefersReducedMotion
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0 }
                }
                exit={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -10 }
                }
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-4 mx-6 sm:mx-8 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden lg:hidden"
              >
                <div className="flex flex-col">
                  {navLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => smoothScroll(e, link.href)}
                      className="px-6 py-3 text-slate-300 hover:text-white hover:bg-white/5 border-b border-white/5 last:border-b-0 transition-colors duration-200"
                      aria-label={`Navigate to ${link.label}`}
                    >
                      {link.label}
                    </Link>
                  ))}

                  {/* Mobile Social Links */}
                  <div className="px-6 py-4 flex gap-3 border-t border-white/5">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                          aria-label={social.label}
                        >
                          <Icon size={20} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};
