import IndividualCard from '@site/src/components/cards/IndividualCard';
import OrganizationCard from '@site/src/components/cards/OrganizationCard';
import OpenCollectiveButtons from '@site/src/components/open-collective/OpenCollectiveButtons';
import OpenCollectiveSection from '@site/src/components/open-collective/OpenCollectiveSection';
import OpenCollectiveSubsection from '@site/src/components/open-collective/OpenCollectiveSubsection';

import { useOpenCollective } from '@site/src/hooks/use-open-collective';

import styles from './styles.module.scss';

export default function OpenCollectiveList() {
  const { organizationsSponsors, individualSponsors } = useOpenCollective();

  return (
    <OpenCollectiveSection className={styles.section}>
      {/* Organizations */}
      <OpenCollectiveSubsection
        title={`${organizationsSponsors.length} Organizations`}
      >
        <div className={styles.organizationsSubsection}>
          {organizationsSponsors.map((organization, idx) => (
            <OrganizationCard
              key={`organization-${idx}`}
              heading="h4"
              organization={organization}
            />
          ))}
        </div>
      </OpenCollectiveSubsection>

      {/* Individual */}
      <OpenCollectiveSubsection title={`${individualSponsors.length} People`}>
        <div className={styles.individualSubsection}>
          {individualSponsors.map((individual, idx) => (
            <IndividualCard
              key={`individual-${idx}`}
              heading="h4"
              individual={individual}
            />
          ))}
        </div>
      </OpenCollectiveSubsection>

      {/* Buttons */}
      <OpenCollectiveButtons />
    </OpenCollectiveSection>
  );
}
