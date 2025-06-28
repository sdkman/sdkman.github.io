import AutoScroll from 'embla-carousel-auto-scroll';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@site/src/components/ui/Carousel';

import technologies from '@site/src/data/technologies';

import styles from './styles.module.scss';

export default function Technologies() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ speed: 0.8, stopOnInteraction: false })]}
        >
          <CarouselContent>
            {technologies.map((technology, idx) => (
              <CarouselItem
                key={`technology-${idx}`}
                className={styles.carouselItem}
              >
                <technology.icon className={styles.logo} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
