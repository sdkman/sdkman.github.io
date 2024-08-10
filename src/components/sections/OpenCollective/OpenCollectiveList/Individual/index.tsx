import type { OpenCollectiveSponsor } from '@site/src/types/open-collective';
import IndividualCard from '@site/src/components/cards/IndividualCard';
import styles from './styles.module.scss';

type Props = {
  individualSponsors: OpenCollectiveSponsor[];
};

export default function Individual({ individualSponsors }: Props) {
  return (
    <div className={styles.section}>
      {individualSponsors.map((individual, idx) => (
        <IndividualCard
          key={`individual-${idx}`}
          heading="h4"
          individual={individual}
        />
      ))}
    </div>
  );
}
