import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importa automaticamente todas as imagens da pasta /src/imagens
// Suporta .jpg, .jpeg e .png
const importedImages = import.meta.glob('../../imagens/*.{jpg,jpeg,png}', { eager: true });

// Converte o objeto retornado por import.meta.glob em uma lista de fotos
const photosFromFolder = Object.keys(importedImages).map((path) => {
  const fileName = path.split('/').pop(); // exemplo: "xvsophia01.jpg"
  const cleanTitle = fileName
    .replace(/\.[^/.]+$/, '') // remove extensão
    .replace(/[-_]/g, ' ') // substitui - e _ por espaço
    .replace(/\d+/g, '') // remove números
    .trim();

  return {
    src: importedImages[path].default,
    orientation: 'landscape',
    title: cleanTitle ? cleanTitle.charAt(0).toUpperCase() + cleanTitle.slice(1) : '',
  };
});


// Define qual lista usar
const photos = photosFromFolder.length > 0 ? photosFromFolder : fallbackPhotos;

export default function Galeria() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="bg-offwhite py-20 scroll-mt-24" id="galeria">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-earth">Galeria</span>
          <h2 className="mt-4 font-display text-3xl text-dark sm:text-4xl">
            Memórias criadas no Sopa Sítio.
          </h2>
          <p className="mt-5 text-sm text-dark/75 sm:text-base">
            Um passeio por casamentos, mini weddings e produções que aconteceram em meio aos jardins da Barra da Tijuca.
          </p>
        </motion.div>

        <motion.div
          className="relative mt-12 columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3 [column-fill:_balance]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="pointer-events-none absolute -top-20 right-10 hidden h-40 w-40 rounded-full bg-earth/30 blur-3xl lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.7, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          {photos.map((photo, index) => (
            <motion.button
              type="button"
              key={photo.src}
              className="group relative mb-6 block w-full overflow-hidden rounded-3xl bg-offwhite shadow-soft outline-none transition focus-visible:ring-2 focus-visible:ring-earth/60"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              onClick={() => setSelectedPhoto(photo)}
              style={{ aspectRatio: photo.orientation === 'portrait' ? '3 / 4' : '4 / 3' }}
            >
              <img
                src={photo.src}
                alt={photo.title || `Foto ${index + 1}`}
                className="max-h-[460px] w-full object-cover transition duration-500 group-hover:scale-105"
                loading={index > 2 ? 'lazy' : 'eager'}
              />
              {photo.title && (
                <div className="absolute inset-x-4 bottom-4 rounded-full bg-offwhite/90 px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-dark shadow-soft transition group-hover:bg-earth/90 group-hover:text-offwhite">
                  {photo.title}
                </div>
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark/70 backdrop-blur-sm p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.figure
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-offwhite shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="h-full w-full object-cover"
              />
              {selectedPhoto.title && (
                <figcaption className="absolute bottom-0 left-0 right-0 bg-dark/60 p-4 text-center text-sm font-medium text-offwhite">
                  {selectedPhoto.title}
                </figcaption>
              )}
              <button
                type="button"
                className="absolute right-4 top-4 rounded-full bg-offwhite/90 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-dark shadow-soft"
                onClick={() => setSelectedPhoto(null)}
              >
                Fechar
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
