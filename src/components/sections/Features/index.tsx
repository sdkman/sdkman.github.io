import React from 'react';
import FeatureCard from './FeatureCard';
import styles from './styles.module.scss';

import { features } from './data';

export default function Features() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionList}>
          {features.map((item, idx) => {
            return <FeatureCard {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}
