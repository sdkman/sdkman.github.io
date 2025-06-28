import type { OpenCollectiveSponsor } from '@site/src/types/open-collective';

import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import dayjs from 'dayjs';

import AvatarImage from '@site/src/components/ui/AvatarImage';

import styles from './styles.module.scss';

type Props = {
  heading?: 'h3' | 'h4';
  organization: OpenCollectiveSponsor;
};

export default function OrganizationCard({
  heading = 'h3',
  organization,
}: Props) {
  return (
    <Link className={clsx('card', styles.card)} href={organization.profile}>
      <div className="card__header">
        <div className={clsx('avatar', styles.cardAvatar)}>
          <AvatarImage
            className="avatar__photo avatar__photo--lg"
            src={organization.image}
            alt={organization.name}
          />
        </div>

        {organization.tier ? (
          <span className={clsx('badge badge--success', styles.cardBadge)}>
            {organization.tier}
          </span>
        ) : null}

        <Heading className={clsx('card__title', styles.cardTitle)} as={heading}>
          {organization.name}
        </Heading>
      </div>

      <div className={clsx('card__footer', styles.cardFooter)}>
        <span className={styles.cardFooterAmount}>
          $ {organization.totalAmountDonated.toFixed(0)}
        </span>
        <span>since {dayjs(organization.createdAt).format('MMM YYYY')}</span>
      </div>
    </Link>
  );
}
