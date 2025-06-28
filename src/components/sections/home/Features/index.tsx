import React from 'react';

import FeatureCard from '@site/src/components/cards/FeatureCard';

import features from '@site/src/data/features';

import styles from './styles.module.scss';

export default function Features() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionList}>
          {features.map((item, idx) => {
            return <FeatureCard key={`featire-${idx}`} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}
