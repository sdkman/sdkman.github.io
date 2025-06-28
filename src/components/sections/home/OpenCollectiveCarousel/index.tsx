import IndividualCard from '@site/src/components/cards/IndividualCard';
import OrganizationCard from '@site/src/components/cards/OrganizationCard';
import OpenCollectiveButtons from '@site/src/components/open-collective/OpenCollectiveButtons';
import OpenCollectiveSection from '@site/src/components/open-collective/OpenCollectiveSection';
import OpenCollectiveSubsection from '@site/src/components/open-collective/OpenCollectiveSubsection';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@site/src/components/ui/Carousel';

import { useOpenCollective } from '@site/src/hooks/use-open-collective';

import styles from './styles.module.scss';

export default function OpenCollectiveCarousel() {
  const { organizationsSponsors, individualSponsors } = useOpenCollective();

  return (
    <OpenCollectiveSection>
      {/* Organizations */}
      <OpenCollectiveSubsection
        title={`${organizationsSponsors.length} Organizations`}
      >
        <Carousel opts={{ align: 'start', loop: true }}>
          <CarouselPrevious />
          <CarouselNext />

          <CarouselContent>
            {organizationsSponsors.slice(0, 8).map((organization, idx) => (
              <CarouselItem
                key={`organization-${idx}`}
                className={styles.organizationCarouselItem}
              >
                <OrganizationCard heading="h4" organization={organization} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </OpenCollectiveSubsection>

      {/* Individual */}
      <OpenCollectiveSubsection title={`${individualSponsors.length} People`}>
        <Carousel opts={{ align: 'start', loop: true }}>
          <CarouselPrevious />
          <CarouselNext />

          <CarouselContent>
            {individualSponsors.slice(0, 12).map((individual, idx) => (
              <CarouselItem
                key={`individual-${idx}`}
                className={styles.individualCarouselItem}
              >
                <IndividualCard heading="h4" individual={individual} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </OpenCollectiveSubsection>

      {/* Buttons */}
      <OpenCollectiveButtons showViewAll />
    </OpenCollectiveSection>
  );
}
