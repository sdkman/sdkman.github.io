import type { OpenCollectiveSponsor } from '@site/src/types/open-collective';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@site/src/components/ui/Carousel';

import OrganizationCard from '@site/src/components/cards/OrganizationCard';
import styles from './styles.module.scss';

type Props = {
  organizationsSponsors: OpenCollectiveSponsor[];
};

export default function Organizations({ organizationsSponsors }: Props) {
  return (
    <Carousel opts={{ align: 'start', loop: true }}>
      <CarouselPrevious />
      <CarouselNext />

      <CarouselContent>
        {organizationsSponsors.slice(0, 8).map((organization, idx) => (
          <CarouselItem
            key={`organization-${idx}`}
            className={styles.carouselItem}
          >
            <OrganizationCard heading="h4" organization={organization} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
