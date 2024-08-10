import type { OpenCollectiveSponsor } from '@site/src/types/open-collective';
import OrganizationCard from '@site/src/components/cards/OrganizationCard';
import styles from './styles.module.scss';

type Props = {
  organizationsSponsors: OpenCollectiveSponsor[];
};

export default function Organizations({ organizationsSponsors }: Props) {
  return (
    <div className={styles.section}>
      {organizationsSponsors.map((organization, idx) => (
        <OrganizationCard
          key={`organization-${idx}`}
          heading="h4"
          organization={organization}
        />
      ))}
    </div>
  );
}
