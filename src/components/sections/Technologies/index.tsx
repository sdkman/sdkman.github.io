import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@site/src/components/ui/Carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import styles from './styles.module.scss';

import { technologies } from './data';

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
