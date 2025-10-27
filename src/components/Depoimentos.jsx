import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const depoimentos = [
  {
    nome: 'Marina & Felipe',
    evento: 'Casamento ao entardecer',
    frase:
      'Cada detalhe superou nossas expectativas. O Sopa Sítio tem uma energia única e a equipe cuidou de nós como se fôssemos da família.',
  },
  {
    nome: 'Ana Paula',
    evento: 'Mini wedding intimista',
    frase:
      'Queríamos um ambiente acolhedor, com boa gastronomia e muita natureza. Encontramos tudo isso, e ainda fomos surpreendidos pela curadoria impecável.',
  },
  {
    nome: 'Grupo Essência',
    evento: 'Retiro de bem-estar',
    frase:
      'Silêncio, verde e uma logística impecável. Pudemos focar na programação porque o time do Sopa Sítio cuidou de toda a infraestrutura.',
  },
];

export default function Depoimentos() {
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setIdx((current) => (current + 1) % depoimentos.length), 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-sand/40 py-20 scroll-mt-24" id="depoimentos">
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-earth/20 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <div className="relative mx-auto max-w-4xl px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-earth">Depoimentos</span>
          <h2 className="mt-4 font-display text-3xl text-dark sm:text-4xl">Histórias vividas no Sopa Sítio.</h2>
        </motion.div>

        <div className="relative mt-12 overflow-hidden rounded-3xl bg-offwhite/95 p-10 shadow-soft">
          <motion.div
            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-earth/25 blur-3xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.2 }}
          />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-center"
            >
              <p className="text-lg italic text-dark/85 sm:text-xl">“{depoimentos[idx].frase}”</p>
              <footer className="text-sm uppercase tracking-wide text-dark/70">
                <span className="font-semibold text-dark">{depoimentos[idx].nome}</span>
                <span className="mx-2 text-earth">•</span>
                {depoimentos[idx].evento}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
          <div className="mt-8 flex justify-center gap-2">
            {depoimentos.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setIdx(index)}
                className="group relative h-2 w-10 rounded-full bg-sand transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth/60"
                aria-label={`Ir para depoimento ${index + 1}`}
              >
                <motion.span
                  className="absolute inset-0 rounded-full bg-earth"
                  animate={{
                    opacity: index === idx ? 1 : 0.25,
                    scaleX: index === idx ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </button>
            ))}
          </div>
          <motion.div
            className="absolute bottom-6 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-earth/60 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
      </div>
    </section>
  );
}
