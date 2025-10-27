import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-sand bg-offwhite py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center text-sm text-dark/80 md:flex-row md:justify-between">
        <p className="font-display text-lg text-dark">Projeto Lorem</p>
        <p>contato@loremipsum.com • (00) 00000-0000</p>
        <div className="flex gap-4">
          <motion.a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-sand p-2 text-dark transition-colors hover:text-earth"
            whileHover={{ y: -3, boxShadow: '0 12px 24px rgba(163,177,138,0.25)' }}
            whileTap={{ scale: 0.95 }}
          >
            <FaInstagram size={18} />
          </motion.a>
          <motion.a
            href="https://wa.me/5521981430186"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-sand p-2 text-dark transition-colors hover:text-earth"
            whileHover={{ y: -3, boxShadow: '0 12px 24px rgba(163,177,138,0.25)' }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp size={18} />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
