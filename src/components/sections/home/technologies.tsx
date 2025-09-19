'use client';

import AutoScroll from 'embla-carousel-auto-scroll';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Container } from '@/components/ui/container';
import technologies from '@/data/technologies';

function Technologies() {
  return (
    <section className="py-20">
      <Container>
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ speed: 0.8, stopOnInteraction: false })]}
        >
          <CarouselContent>
            {technologies.map((technology, idx) => (
              <CarouselItem
                key={`technology-${idx}`}
                className="basis-1/3 md:basis-1/5 lg:basis-1/6 xl:basis-[100%/8]"
              >
                <technology.icon className="fill-muted-foreground size-14" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
}

export { Technologies };
