import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const openRef = useRef(open);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 32);

      if (openRef.current) {
        setHidden(false);
        lastScrollY.current = current;
        return;
      }

      if (current > lastScrollY.current && current > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = current;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    openRef.current = open;
    if (open) {
      setHidden(false);
    }
  }, [open]);

  return (
    <header
      className={`relative fixed top-0 left-0 right-0 z-50 border-b border-sand transform transition-all duration-500 ${
        scrolled ? 'bg-offwhite/95 backdrop-blur-md shadow-soft' : 'bg-offwhite/75 backdrop-blur-sm'
      } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:py-5">
        <motion.a
          href="#inicio"
          className="relative font-display text-2xl tracking-wide text-dark"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="absolute -inset-3 -z-10 rounded-full bg-earth/10 blur-xl"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }}
          />
          Sopa Sítio
        </motion.a>
        <ul className="hidden items-center gap-8 text-sm font-medium text-dark md:flex">
          {links.map((link) => (
            <motion.li key={link.href} whileHover={{ y: -2 }}>
              <a href={link.href} className="transition-colors hover:text-earth">
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full border border-sand p-2 text-dark md:hidden"
          aria-label="Abrir menu"
        >
          <HiOutlineMenuAlt4 size={22} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-dark/60 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute right-4 top-4 w-[calc(100vw-2rem)] max-w-xs rounded-3xl bg-offwhite p-6 shadow-soft"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 240, damping: 24 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-xl text-dark">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-sand p-2 text-dark"
                  aria-label="Fechar menu"
                >
                  <HiOutlineX size={20} />
                </button>
              </div>
              <ul className="flex flex-col gap-4 text-base font-medium text-dark">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block rounded-xl px-4 py-3 transition-colors hover:bg-sand/60"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-earth/40 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0.9 : 0.4 }}
        transition={{ duration: 0.6 }}
      />
    </header>
  );
}
