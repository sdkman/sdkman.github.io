import type { OpenCollectiveSponsor } from '@site/src/types/open-collective';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@site/src/components/ui/Carousel';
import IndividualCard from '@site/src/components/cards/IndividualCard';
import styles from './styles.module.scss';

type Props = {
  individualSponsors: OpenCollectiveSponsor[];
};

export default function Individual({ individualSponsors }: Props) {
  return (
    <Carousel opts={{ align: 'start', loop: true }}>
      <CarouselPrevious />
      <CarouselNext />

      <CarouselContent>
        {individualSponsors.slice(0, 12).map((individual, idx) => (
          <CarouselItem
            key={`individual-${idx}`}
            className={styles.carouselItem}
          >
            <IndividualCard heading="h4" individual={individual} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
