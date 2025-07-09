import type {
  OpenCollectiveKeys,
  OpenCollectiveSponsor,
} from '@site/src/types/open-collective';

import fetchJsonp from 'fetch-jsonp';

function prepareSponsors(sponsors: OpenCollectiveSponsor[]) {
  const sponsorsData = sponsors
    .reduce((acc, val) => {
      const existVal = acc.find((item) => item.profile === val.profile);

      if (val.totalAmountDonated > 0 && !existVal) {
        acc.push(val);
      }

      return acc;
    }, [])
    .sort((a, b) => (a.totalAmountDonated > b.totalAmountDonated ? -1 : 1));

  return sponsorsData;
}

async function getOpenCollective(key: OpenCollectiveKeys) {
  const params = {
    organizations: {
      uri: '/sdkman/members/organizations.json',
      jsonpCallbackFunction: 'ocOrganizationsJsonpCallback',
    },
    users: {
      uri: '/sdkman/members/users.json',
      jsonpCallbackFunction: 'ocUsersJsonpCallback',
    },
  };

  try {
    const { uri, jsonpCallbackFunction } = params[key];

    const res = await fetchJsonp(
      `https://json2jsonp.com/?url=https://opencollective.com/${uri}`,
      { jsonpCallbackFunction },
    );
    const sponsors: OpenCollectiveSponsor[] = await res.json();

    return prepareSponsors(sponsors);
  } catch (err) {
    console.error(err);
  }

  return [];
}

export const openCollectiveService = {
  getOpenCollective,
};
