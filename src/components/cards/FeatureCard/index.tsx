import * as React from 'react';

import styles from './styles.module.scss';

type Props = {
  title: string;
  icon: React.ElementType;
  description: React.ReactNode;
};

export default function FeatureCard({ title, icon: Icon, description }: Props) {
  return (
    <div className="card">
      <div className="card__header">
        <div className={styles.cardIcon}>
          <Icon />
        </div>

        <h2 className="card__title">{title}</h2>
      </div>
      <div className="card__body">
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </div>
  );
}
