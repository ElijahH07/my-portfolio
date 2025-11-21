"use client"

import EmblaCarousel from '@/components/carousel/EmblaCarousel';

export default function Home() {
  return (
    <main>
      <EmblaCarousel options={{loop: true}}>
      </EmblaCarousel>
    </main>
  );
}