"use client"

import EmblaCarousel from '@/components/carousel/EmblaCarousel';

export default function Home() {
  return (
    <main>
      <EmblaCarousel slides={[1, 2, 3, 4, 5, 6]} options={{loop: true}}>
      </EmblaCarousel>
    </main>
  );
}