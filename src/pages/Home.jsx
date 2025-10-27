import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Sobre from '../components/Sobre';
import Eventos from '../components/Eventos';
import Galeria from '../components/Galeria';
import Depoimentos from '../components/Depoimentos';
import Localizacao from '../components/Localizacao';
import Contato from '../components/Contato';

export default function Home() {
  return (
    <main>
      <Hero />
      <Carousel />
      <Sobre />
      <Eventos />
      <Galeria />
      <Depoimentos />
      <Localizacao />
      <Contato />
    </main>
  );
}
