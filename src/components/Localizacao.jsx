import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const contacts = [
  {
    icon: FaPhoneAlt,
    title: 'Telefone',
    value: '(21) 98143-0186',
    href: 'tel:+5521981430186',
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    value: 'eventos@sopasito.com',
    href: 'mailto:eventos@sopasito.com',
  },
  {
    icon: FaInstagram,
    title: 'Instagram',
    value: '@sopasito',
    href: 'https://instagram.com/sopasito',
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    value: 'Fale conosco no WhatsApp',
    href: 'https://wa.me/5521981430186',
  },
];

export default function Localizacao() {
  return (
    <section className="bg-offwhite py-20 scroll-mt-24" id="localizacao">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-earth">Localização</span>
          <h2 className="mt-4 font-display text-3xl text-dark sm:text-4xl">
            Sopa Sítio na Barra da Tijuca: lorem ipsum dolor sit amet.
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="relative overflow-hidden rounded-3xl shadow-soft"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="pointer-events-none absolute left-[8%] top-[12%] hidden h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-earth/25 blur-3xl lg:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <iframe
              title="Mapa do Sopa Sítio na Barra da Tijuca"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1154585053336!2d-43.36969322376013!3d-22.99947447919502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fe6284e7f23%3A0x4b0bf014efc3c1a5!2sBarra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1700001234567!5m2!1spt-BR!2sbr"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            className="flex h-full flex-col justify-between rounded-3xl border border-sand/60 bg-offwhite/90 p-8 shadow-soft"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div>
              <div className="flex items-center gap-3 text-earth">
                <FaMapMarkerAlt />
                <span className="font-semibold uppercase tracking-wide text-sm">Barra da Tijuca</span>
              </div>
              <p className="mt-4 text-sm text-dark/75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan, nunc ut ornare congue, ipsum nisl
                congue sem, id pulvinar urna nulla vitae orci.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contacts.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex w-full items-start gap-3 rounded-2xl border border-sand/60 bg-offwhite/80 p-4 transition hover:border-earth hover:shadow-md"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sand/60 text-earth shrink-0">
                      <Icon size={22} className="w-5 h-5" />
                    </span>
                    <div className="flex-1 text-left min-w-0">
                      <p className="text-xs uppercase tracking-wide text-earth/80">{item.title}</p>
                      <p className="break-words text-sm font-medium leading-relaxed text-dark group-hover:text-earth whitespace-pre-line overflow-hidden text-ellipsis">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
