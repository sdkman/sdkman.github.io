'use client';

import type { OpenCollectiveSponsor } from '@/types/open-collective';

import Link from 'next/link';

import { OpenCollectiveButton } from '@/components/open-collective/open-collective-button';
import {
  OpenCollectiveIndividualCard,
  OpenCollectiveOrganizationCard,
} from '@/components/open-collective/open-collective-cards';
import {
  OpenCollectiveSection,
  OpenCollectiveSubsection,
} from '@/components/open-collective/open-collective-section';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type OpenCollectiveCarouselProps = {
  organizationsSponsors: OpenCollectiveSponsor[];
  individualSponsors: OpenCollectiveSponsor[];
};

function OpenCollectiveCarousel({
  organizationsSponsors,
  individualSponsors,
}: Readonly<OpenCollectiveCarouselProps>) {
  return (
    <OpenCollectiveSection>
      {/* Organizations */}
      <OpenCollectiveSubsection
        title={`${organizationsSponsors.length} Organizations`}
      >
        <Carousel opts={{ align: 'start', loop: true }}>
          <CarouselPrevious className="-left-4 z-10" />
          <CarouselNext className="-right-4 z-10" />

          <CarouselContent className="py-1">
            {organizationsSponsors.slice(0, 8).map((organization, idx) => (
              <CarouselItem
                key={`organization-${idx}`}
                className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <OpenCollectiveOrganizationCard organization={organization} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </OpenCollectiveSubsection>

      {/* Individual */}
      <OpenCollectiveSubsection title={`${individualSponsors.length} People`}>
        <Carousel opts={{ align: 'start', loop: true }}>
          <CarouselPrevious className="-left-4 z-10" />
          <CarouselNext className="-right-4 z-10" />

          <CarouselContent className="py-1">
            {individualSponsors.slice(0, 12).map((individual, idx) => (
              <CarouselItem
                key={`individual-${idx}`}
                className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6"
              >
                <OpenCollectiveIndividualCard individual={individual} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </OpenCollectiveSubsection>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
        <Button variant="outline" asChild>
          <Link href="/contributors">View all contributors</Link>
        </Button>

        <OpenCollectiveButton />
      </div>
    </OpenCollectiveSection>
  );
}

export { OpenCollectiveCarousel };
