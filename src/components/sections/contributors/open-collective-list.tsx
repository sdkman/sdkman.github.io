import type { OpenCollectiveSponsor } from '@/types/open-collective';

import { OpenCollectiveButton } from '@/components/open-collective/open-collective-button';
import {
  OpenCollectiveIndividualCard,
  OpenCollectiveOrganizationCard,
} from '@/components/open-collective/open-collective-cards';
import {
  OpenCollectiveSection,
  OpenCollectiveSubsection,
} from '@/components/open-collective/open-collective-section';

type OpenCollectiveListProps = {
  organizationsSponsors: OpenCollectiveSponsor[];
  individualSponsors: OpenCollectiveSponsor[];
};

function OpenCollectiveList({
  organizationsSponsors,
  individualSponsors,
}: Readonly<OpenCollectiveListProps>) {
  return (
    <OpenCollectiveSection>
      {/* Organizations */}
      <OpenCollectiveSubsection
        title={`${organizationsSponsors.length} Organizations`}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {organizationsSponsors.map((organization, idx) => (
            <OpenCollectiveOrganizationCard
              key={`organization-${idx}`}
              organization={organization}
            />
          ))}
        </div>
      </OpenCollectiveSubsection>

      {/* Individual */}
      <OpenCollectiveSubsection title={`${individualSponsors.length} People`}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {individualSponsors.map((individual, idx) => (
            <OpenCollectiveIndividualCard
              key={`individual-${idx}`}
              individual={individual}
            />
          ))}
        </div>
      </OpenCollectiveSubsection>

      <div className="mt-10 flex flex-col items-center justify-center">
        <OpenCollectiveButton />
      </div>
    </OpenCollectiveSection>
  );
}

export { OpenCollectiveList };
