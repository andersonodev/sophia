import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaBirthdayCake, FaUsers, FaLeaf, FaSpa, FaGlassCheers } from 'react-icons/fa';

const eventos = [
  {
    icon: FaHeart,
    title: 'Casamentos & Mini Weddings',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac odio at elit bibendum malesuada.',
  },
  {
    icon: FaBirthdayCake,
    title: 'Aniversários & Debuts',
    desc: 'Suspendisse viverra justo vitae neque maximus, vitae vestibulum lorem pulvinar. Phasellus euismod velit at orci.',
  },
  {
    icon: FaGlassCheers,
    title: 'Confraternizações',
    desc: 'Praesent feugiat tellus sed erat varius, vitae rutrum risus fermentum. Sed dignissim erat at tristique blandit.',
  },
  {
    icon: FaSpa,
    title: 'Retiros & Bem-estar',
    desc: 'Integer sit amet ante sit amet massa ultricies rhoncus. Vestibulum ac erat vitae enim interdum accumsan.',
  },
  {
    icon: FaUsers,
    title: 'Workshops & Produções',
    desc: 'Morbi vitae turpis sed nulla scelerisque interdum. Cras sed neque a elit cursus rhoncus id non erat.',
  },
  {
    icon: FaLeaf,
    title: 'Experiências Sob Medida',
    desc: 'Vivamus et sapien vel nibh volutpat dictum. Pellentesque habitant morbi tristique senectus et netus.',
  },
];

const cardHover = { scale: 1.02, y: -6 };

export default function Eventos() {
  return (
    <section className="relative bg-sand/40 py-20 scroll-mt-24" id="eventos">
      <motion.div
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-earth/30 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-earth">Eventos</span>
          <h2 className="mt-4 font-display text-3xl text-dark sm:text-4xl">Lorem ipsum dolor sit amet.</h2>
          <p className="mt-5 text-sm text-dark/75 sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, massa non imperdiet dapibus, sem justo
            feugiat augue, vitae luctus risus urna et turpis.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eventos.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="flex h-full flex-col rounded-3xl border border-sand/60 bg-offwhite/80 p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={cardHover}
              >
                <motion.span
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sand/70 text-earth"
                  whileHover={{ rotate: [0, -6, 6, 0] }}
                  transition={{ duration: 0.8 }}
                >
                  <Icon size={24} />
                </motion.span>
                <h3 className="font-display text-xl text-dark">{item.title}</h3>
                <p className="mt-3 text-sm text-dark/75">{item.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
