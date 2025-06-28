import type { OpenCollectiveSponsor } from '@site/src/types/open-collective';

import * as React from 'react';

import { openCollectiveService } from '@site/src/lib/services/open-collective';

export const useOpenCollective = () => {
  const [organizationsSponsors, setOrganizationsSponsors] = React.useState<
    OpenCollectiveSponsor[]
  >([]);
  const [individualSponsors, setIndividualSponsors] = React.useState<
    OpenCollectiveSponsor[]
  >([]);

  React.useEffect(() => {
    fetchSponsors().then((data) => {
      setOrganizationsSponsors(data.organizationsSponsors);
      setIndividualSponsors(data.individualSponsors);
    });
  }, []);

  return { organizationsSponsors, individualSponsors };
};

async function fetchSponsors() {
  const [organizationsSponsors, individualSponsors] = await Promise.all([
    openCollectiveService.getOpenCollective('organizations'),
    openCollectiveService.getOpenCollective('users'),
  ]);

  return { organizationsSponsors, individualSponsors };
}
