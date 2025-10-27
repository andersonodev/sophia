import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../../imagens/xvsophia0.jpg';

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const floatingShapes = [
  { className: 'top-[-6rem] left-[-3rem] md:top-[-5rem] md:left-[8vw]', delay: 0 },
  { className: 'bottom-[-5rem] right-[-4rem] md:right-[10vw]', delay: 1.2 },
  { className: 'top-[24vh] right-[15vw]', delay: 0.6 },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden rounded-b-[2.5rem] bg-offwhite scroll-mt-24"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-offwhite via-offwhite/85 to-offwhite/40" />
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(163,177,138,0.18)_0%,_transparent_60%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`pointer-events-none absolute h-40 w-40 rounded-full bg-earth/25 blur-3xl md:h-56 md:w-56 ${shape.className}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.7, scale: 1, y: [0, 18, 0] }}
          transition={{
            duration: 10,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />
      ))}

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-5 py-24 text-center">
        <motion.span
          className="mb-4 inline-flex items-center rounded-full bg-offwhite/80 px-5 py-2 text-xs uppercase tracking-[0.3em] text-earth"
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          Natureza • Sofisticação • Barra da Tijuca
        </motion.span>
        <motion.h1
          className="font-display text-4xl leading-tight text-dark sm:text-5xl md:text-6xl"
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          Celebre no Sopa Sítio, o refúgio de eventos na Barra da Tijuca.
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-base text-dark/80 sm:text-lg"
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          Jardins tropicais, infraestrutura boutique e uma equipe dedicada para transformar casamentos, aniversários e
          retiros em experiências memoráveis.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          <motion.a
            href="#contato"
            className="rounded-full bg-earth px-8 py-3 text-sm font-semibold uppercase tracking-wide text-offwhite shadow-soft"
            whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(163, 177, 138, 0.35)' }}
            whileTap={{ scale: 0.97 }}
          >
            Solicitar proposta
          </motion.a>
          <motion.a
            href="#sobre"
            className="rounded-full border border-sand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-dark"
            whileHover={{ y: -2, backgroundColor: 'rgba(218,210,188,0.6)' }}
            whileTap={{ scale: 0.98 }}
          >
            Conheça o espaço
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-dark/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <motion.span
            className="h-px w-10 bg-dark/40"
            animate={{ width: ['2rem', '3.5rem', '2rem'] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          Role e descubra
          <motion.span
            className="h-px w-10 bg-dark/40"
            animate={{ width: ['3.5rem', '2rem', '3.5rem'] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
