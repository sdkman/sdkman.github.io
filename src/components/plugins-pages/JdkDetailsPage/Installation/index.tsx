import type { Architecture } from '@site/src/types/jdk';

import * as React from 'react';

import CodeBlock from '@theme/CodeBlock';
import Heading from '@theme/Heading';
import clsx from 'clsx';

import Select from '@site/src/components/ui/Select';

import { jdksService } from '@site/src/lib/services/jdks';

import styles from './styles.module.scss';

type Props = {
  id: string;
  architecture: Architecture[];
};

export default function Installation({ id, architecture }: Props) {
  const [platform, setPlatform] = React.useState(architecture[0].label);
  const [versions, setVersions] = React.useState([]);
  const [version, setVersion] = React.useState('');

  React.useEffect(() => {
    const currentPlatformId = architecture.find(
      (arch) => arch.label === platform,
    ).platformId;

    const data = jdksService.getVersions(currentPlatformId, id);
    setVersions(data);
    setVersion(data[0]);
  }, [platform]);

  function handleCHangePlatform(value: string) {
    setPlatform(value);
  }

  function handleChangeVersion(value: string) {
    setVersion(value);
  }

  return (
    <div>
      <div className={styles.sectionTitleWrapper}>
        <Heading as="h2">Installation</Heading>

        <div className={styles.sectionSelectWrapper}>
          <Select
            value={platform}
            items={architecture.map((arch) => arch.label)}
            position="right"
            onChange={handleCHangePlatform}
          />

          <Select
            value={version}
            items={versions}
            position="right"
            onChange={handleChangeVersion}
          />
        </div>
      </div>

      <CodeBlock language="shell">
        sdk install java {version}-{id}
      </CodeBlock>

      <ul className={styles.sectionBadgeList}>
        {versions.map((badgeVersion, idx) => (
          <li key={`version-${idx}`}>
            <button
              className={clsx(
                'badge',
                styles.sectionBadge,
                badgeVersion === version
                  ? 'badge--primary'
                  : 'badge--secondary',
              )}
              onClick={() => handleChangeVersion(badgeVersion)}
            >
              {badgeVersion}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
