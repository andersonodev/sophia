import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1520854221050-0f4caff449fb?auto=format&fit=crop&w=1920&q=80',
    alt: 'Casal celebrando casamento ao ar livre',
    title: 'Aurora Celebration',
    caption:
      'Cerimônia ao pôr do sol com iluminação cênica e florais aéreos que transformam o jardim em um cenário suspenso.',
  },
  {
    src: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1920&q=80',
    alt: 'Noivos caminhando sob luzes pendentes',
    title: 'Votos sob Estrelas',
    caption:
      'Uma passarela de luzes e folhagens conduz os noivos para o altar, criando um corredor mágico em meio à natureza.',
  },
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80',
    alt: 'Recepção de casamento com mesa decorada',
    title: 'Banquete Poético',
    caption:
      'Louças artesanais, arranjos orgânicos e velas suspensas compõem a mesa de jantar de um casamento inesquecível.',
  },
  {
    src: 'https://images.unsplash.com/photo-1520854221050-0a4489a1a3ca?auto=format&fit=crop&w=1920&q=80',
    alt: 'Noivos celebrando ao lado de amigos com sparkles',
    title: 'Sparks of Love',
    caption:
      'Saída triunfal dos recém-casados, ladeados por sparklers que iluminam sorrisos e brindes de quem mais importa.',
  },
  {
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1920&q=80',
    alt: 'Mesa posta elegante em casamento ao ar livre',
    title: 'Recepção de Autor',
    caption:
      'Mesa posta contemporânea com peças artesanais, composições em camadas e luz de velas a perder de vista.',
  },
];

const SLIDE_INTERVAL = 7000;
const TRANSITION = 1.1;

const imageVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 120 : -120,
    scale: 1.08,
    filter: 'brightness(1.1)',
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'brightness(1)',
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -120 : 120,
    scale: 0.96,
    filter: 'brightness(0.9)',
  }),
};

const glowVariants = {
  enter: { opacity: 0, scale: 0.8 },
  center: { opacity: 0.8, scale: 1 },
  exit: { opacity: 0, scale: 1.2 },
};

export default function Carousel() {
  const [{ index, direction }, setState] = useState({ index: 0, direction: 1 });
  const [paused, setPaused] = useState(false);

  const handleNavigation = useCallback(
    (step) => {
      setState((current) => {
        const nextIndex = (current.index + step + slides.length) % slides.length;
        return { index: nextIndex, direction: step };
      });
    },
    []
  );

  useEffect(() => {
    if (paused) return undefined;
    const timer = setTimeout(() => handleNavigation(1), SLIDE_INTERVAL);
    return () => clearTimeout(timer);
  }, [handleNavigation, index, paused]);

  const activeSlide = useMemo(() => slides[index], [index]);

  return (
    <section className="relative z-10 -mt-10 bg-offwhite sm:-mt-12 md:-mt-16">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="relative overflow-hidden rounded-[2.5rem] border border-sand/60 bg-offwhite shadow-soft"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={activeSlide.src}
              src={activeSlide.src}
              alt={activeSlide.alt}
              className="h-[300px] w-full object-cover sm:h-[480px] md:h-[560px]"
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              transition={{ duration: TRANSITION, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`glow-${activeSlide.src}`}
              className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-earth/30 blur-3xl md:-left-32"
              variants={glowVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: TRANSITION }}
            />
          </AnimatePresence>

          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-offwhite via-offwhite/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-offwhite/70 via-transparent to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-8 pb-8">
            <motion.div
              key={`caption-${activeSlide.src}`}
              className="max-w-xl text-left text-offwhite drop-shadow-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-xs uppercase tracking-[0.4em] text-offwhite/80">Highlights</span>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl">{activeSlide.title}</h3>
              <p className="mt-3 text-sm text-offwhite/90 sm:text-base">{activeSlide.caption}</p>
            </motion.div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => handleNavigation(-1)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-offwhite/40 bg-offwhite/20 text-offwhite transition hover:bg-offwhite/40 hover:text-dark"
                aria-label="Slide anterior"
              >
                <HiOutlineArrowNarrowLeft size={22} />
              </button>
              <button
                type="button"
                onClick={() => handleNavigation(1)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-offwhite/40 bg-offwhite/20 text-offwhite transition hover:bg-offwhite/40 hover:text-dark"
                aria-label="Próximo slide"
              >
                <HiOutlineArrowNarrowRight size={22} />
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex gap-2 px-8 pb-4">
            {slides.map((slide, slideIndex) => {
              const isActive = slideIndex === index;
              return (
                <div key={slide.src} className="h-1.5 flex-1 overflow-hidden rounded-full bg-offwhite/30">
                  <motion.div
                    className="h-full rounded-full bg-earth"
                    initial={{ width: isActive ? '100%' : '0%' }}
                    animate={{ width: isActive && !paused ? '100%' : '0%' }}
                    transition={{
                      duration: isActive && !paused ? SLIDE_INTERVAL / 1000 : 0.3,
                      ease: 'linear',
                    }}
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
