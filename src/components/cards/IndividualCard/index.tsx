import type { OpenCollectiveSponsor } from '@site/src/types/open-collective';

import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import clsx from 'clsx';

import AvatarImage from '@site/src/components/ui/AvatarImage';

import styles from './styles.module.scss';

type Props = {
  heading?: 'h3' | 'h4';
  individual: OpenCollectiveSponsor;
};

export default function IndividualCard({ heading = 'h3', individual }: Props) {
  return (
    <Link className={clsx('card', styles.card)} href={individual.profile}>
      <div className="card__header">
        <div className={clsx('avatar avatar--vertical', styles.cardAvatar)}>
          <AvatarImage
            className="avatar__photo avatar__photo--lg"
            src={individual.image}
            alt={individual.name}
          />
        </div>

        <Heading className={clsx('card__title', styles.cardTitle)} as={heading}>
          {individual.name}
        </Heading>
      </div>
    </Link>
  );
}
