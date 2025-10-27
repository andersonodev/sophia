import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'SEU_SERVICE_ID',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'SEU_TEMPLATE_ID',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'SEU_PUBLIC_KEY',
};

const eventOptions = ['Casamento', 'Mini Wedding', 'Aniversário', 'Corporativo', 'Retiro', 'Confraternização', 'Outro'];

export default function Contato() {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (
        EMAILJS_CONFIG.serviceId.includes('SEU_') ||
        EMAILJS_CONFIG.templateId.includes('SEU_') ||
        EMAILJS_CONFIG.publicKey.includes('SEU_')
      ) {
        throw new Error('Configure suas chaves do EmailJS nas variáveis de ambiente.');
      }

      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey,
      );
      setSent(true);
      formRef.current?.reset();
    } catch (err) {
      setError(err.message || 'Não foi possível enviar a mensagem. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-sand/40 py-20 scroll-mt-24" id="contato">
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-64 max-w-5xl rounded-full bg-earth/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="rounded-3xl border border-sand/60 bg-offwhite/90 p-10 shadow-soft"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-earth">Contato</span>
          <h2 className="mt-4 font-display text-3xl text-dark sm:text-4xl">Planeje seu evento com o Sopa Sítio.</h2>
          <p className="mt-6 text-sm text-dark/75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique arcu vitae maximus tempus, sed dictum
            neque gravida.
          </p>
          <div className="mt-8 space-y-4">
            <p className="text-sm text-dark/80">
              <strong className="text-earth">Email:</strong>{' '}
              <a href="mailto:eventos@sopasito.com" className="text-dark underline-offset-4 hover:underline">
                eventos@sopasito.com
              </a>
            </p>
            <p className="text-sm text-dark/80">
              <strong className="text-earth">Telefone / WhatsApp:</strong>{' '}
              <a href="tel:+5521981430186" className="text-dark underline-offset-4 hover:underline">
                (21) 98143-0186
              </a>
            </p>
            <p className="text-sm text-dark/80">
              <strong className="text-earth">Atendimento:</strong> Segunda a sábado • 09h às 19h
            </p>
          </div>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-sand/60 bg-offwhite/95 p-8 shadow-soft"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {sent ? (
            <div className="rounded-2xl bg-earth/10 p-8 text-center text-dark">
              <h3 className="font-display text-2xl text-earth">Mensagem enviada!</h3>
              <p className="mt-3 text-sm text-dark/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis nisl vitae aliquet tempor.
              </p>
              <button
                type="button"
                className="mt-6 rounded-full border border-earth px-6 py-2 text-xs font-semibold uppercase tracking-wide text-earth transition hover:bg-earth hover:text-offwhite"
                onClick={() => setSent(false)}
              >
                Enviar novamente
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="flex flex-col text-xs font-semibold uppercase tracking-wide text-earth/70">
                  Nome
                  <input
                    name="nome"
                    type="text"
                    required
                    placeholder="Como podemos te chamar?"
                    className="mt-2 rounded-2xl border border-sand/60 bg-white px-4 py-3 text-sm text-dark outline-none transition focus:border-earth focus:ring-2 focus:ring-earth/40"
                  />
                </label>
                <label className="flex flex-col text-xs font-semibold uppercase tracking-wide text-earth/70">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="email@exemplo.com"
                    className="mt-2 rounded-2xl border border-sand/60 bg-white px-4 py-3 text-sm text-dark outline-none transition focus:border-earth focus:ring-2 focus:ring-earth/40"
                  />
                </label>
              </div>
              <label className="flex flex-col text-xs font-semibold uppercase tracking-wide text-earth/70">
                Telefone
                <input
                  name="telefone"
                  type="tel"
                  placeholder="(21) 98143-0186"
                  className="mt-2 rounded-2xl border border-sand/60 bg-white px-4 py-3 text-sm text-dark outline-none transition focus:border-earth focus:ring-2 focus:ring-earth/40"
                />
              </label>
              <label className="flex flex-col text-xs font-semibold uppercase tracking-wide text-earth/70">
                Tipo de evento
                <select
                  name="tipo"
                  required
                  className="mt-2 rounded-2xl border border-sand/60 bg-white px-4 py-3 text-sm text-dark outline-none transition focus:border-earth focus:ring-2 focus:ring-earth/40"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                    {eventOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              <label className="flex flex-col text-xs font-semibold uppercase tracking-wide text-earth/70">
                Data ou período desejado
                <input
                  name="data"
                  type="text"
                  placeholder="Ex: outubro de 2024"
                  className="mt-2 rounded-2xl border border-sand/60 bg-white px-4 py-3 text-sm text-dark outline-none transition focus:border-earth focus:ring-2 focus:ring-earth/40"
                />
              </label>
              <label className="flex flex-col text-xs font-semibold uppercase tracking-wide text-earth/70">
                Mensagem
                <textarea
                  name="mensagem"
                  required
                  rows={4}
                  placeholder="Conte sobre o estilo do evento, número de convidados e referências."
                  className="mt-2 rounded-2xl border border-sand/60 bg-white px-4 py-3 text-sm text-dark outline-none transition focus:border-earth focus:ring-2 focus:ring-earth/40"
                />
              </label>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-earth px-8 py-3 text-sm font-semibold uppercase tracking-wide text-offwhite shadow-soft transition hover:bg-sand hover:text-dark disabled:cursor-not-allowed disabled:opacity-60"
                  whileHover={{ y: -2, boxShadow: '0 12px 30px rgba(163,177,138,0.35)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? 'Enviando...' : 'Enviar mensagem'}
                </motion.button>
              </form>
            )}
        </motion.div>
      </div>
    </section>
  );
}
