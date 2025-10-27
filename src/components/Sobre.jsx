import React from 'react';
import { motion } from 'framer-motion';
import imageOne from '../../imagens/xvsophia01.jpg';
import imageTwo from '../../imagens/xvsophia02.jpg';
import imageThree from '../../imagens/xvsophia03.jpg';

const highlights = [
  {
    heading: 'Natureza que abraça',
    copy: 'Jardins integrados à mata nativa, espelho d’água e gramados amplos garantem um cenário orgânico e inesquecível.',
  },
  {
    heading: 'Infraestrutura boutique',
    copy: 'Salão climatizado, lounge coberto, suíte dos noivos e copa de apoio oferecem conforto total para convidados e fornecedores.',
  },
  {
    heading: 'Curadoria personalizada',
    copy: 'Equipe dedicada para acompanhar cronograma, fornecedores e estilo do evento, do pré-wedding ao dia seguinte.',
  },
];

export default function Sobre() {
  return (
    <section className="bg-offwhite py-20 scroll-mt-24" id="sobre">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 md:flex-row md:items-center">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-earth">Sobre nós</span>
          <motion.h2
            className="font-display text-3xl leading-tight text-dark sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Sopa Sítio: atmosfera acolhedora entre o verde da Barra da Tijuca.
          </motion.h2>
          <motion.p
            className="text-dark/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Localizado na Barra da Tijuca, o Sopa Sítio é o cenário ideal para casamentos, aniversários e celebrações ao
            ar livre. Unimos natureza tropical, infraestrutura impecável e uma curadoria afetiva em cada detalhe para
            criar experiências memoráveis.
          </motion.p>
          <div className="space-y-5">
            {highlights.map((item) => (
              <motion.div
                key={item.heading}
                className="rounded-2xl border border-sand/50 bg-offwhite/60 p-5 shadow-sm"
                whileHover={{ y: -6, boxShadow: '0 18px 40px rgba(51, 51, 51, 0.08)' }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="font-display text-xl text-dark">{item.heading}</h3>
                <p className="mt-2 text-sm text-dark/75">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative flex flex-1 flex-col gap-4 md:grid md:grid-cols-2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="pointer-events-none absolute -top-10 right-6 hidden h-40 w-40 rounded-full bg-earth/20 blur-3xl md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />
          <motion.img
            src={imageOne}
            alt="Natureza do sítio"
            className="h-64 w-full rounded-3xl object-cover shadow-soft md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotate: -0.3 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={imageTwo}
            alt="Espaço ao ar livre"
            className="h-56 w-full rounded-3xl object-cover shadow-soft md:mt-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, rotate: 0.4 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={imageThree}
            alt="Estrutura para eventos"
            className="h-56 w-full rounded-3xl object-cover shadow-soft md:-mt-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, rotate: -0.4 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
