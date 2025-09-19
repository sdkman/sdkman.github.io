'use client';

import type { Architecture } from '@/types/jdk';

import * as React from 'react';

import { Badge } from '@/components/ui/badge';
import { Code } from '@/components/ui/code';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { jdksService } from '@/lib/services/jdks';

type JdkInstallationProps = {
  id: string;
  architecture: Architecture[];
};

function JdkInstallation({ id, architecture }: Readonly<JdkInstallationProps>) {
  const [platform, setPlatform] = React.useState(architecture[0].label);
  const [versions, setVersions] = React.useState<string[]>([]);
  const [version, setVersion] = React.useState('');

  React.useEffect(() => {
    const currentPlatformId = architecture.find(
      (arch) => arch.label === platform,
    )?.platformId;

    if (currentPlatformId) {
      jdksService.getVersions(currentPlatformId, id).then((data) => {
        setVersions(data);
        setVersion(data[0]);
      });
    }
  }, [architecture, id, platform]);

  function handleCHangePlatform(value: string) {
    setPlatform(value);
  }

  function handleChangeVersion(value: string) {
    setVersion(value);
  }

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-medium">Installation</h2>

      <div className="flex items-center justify-end gap-2">
        <Select value={platform} onValueChange={handleCHangePlatform}>
          <SelectTrigger size="sm">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            {architecture.map((archItem, idx) => (
              <SelectItem key={`arch-${idx}`} value={archItem.label}>
                {archItem.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={version} onValueChange={handleChangeVersion}>
          <SelectTrigger size="sm">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            {versions.map((versionItem, idx) => (
              <SelectItem key={`version-${idx}`} value={versionItem}>
                {versionItem}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <pre>
        <Code>{`sdk install java ${version}-${id}`}</Code>
      </pre>

      <ul className="flex flex-wrap gap-2">
        {versions.map((badgeVersion, idx) => (
          <li key={`version-${idx}`}>
            <Badge
              className="cursor-pointer"
              variant={version === badgeVersion ? 'secondary' : 'outline'}
              asChild
            >
              <button onClick={() => handleChangeVersion(badgeVersion)}>
                {badgeVersion}
              </button>
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { JdkInstallation };
