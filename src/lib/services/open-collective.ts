import type {
  OpenCollectiveKeys,
  OpenCollectiveSponsor,
} from '@/types/open-collective';

function prepareSponsors(sponsors: OpenCollectiveSponsor[]) {
  const sponsorsData = sponsors
    .reduce<OpenCollectiveSponsor[]>((acc, val) => {
      const existVal = acc.find((item) => item.profile === val.profile);

      if (val.totalAmountDonated > 0 && !existVal) {
        acc.push(val);
      }

      return acc;
    }, [])
    .sort((a, b) => (a.totalAmountDonated > b.totalAmountDonated ? -1 : 1));

  return sponsorsData;
}

async function getOpenCollective(
  key: OpenCollectiveKeys,
): Promise<OpenCollectiveSponsor[]> {
  const params = {
    organizations: {
      uri: '/sdkman/members/organizations.json',
    },
    users: {
      uri: '/sdkman/members/users.json',
    },
  };

  try {
    const { uri } = params[key];

    const res = await fetch(`https://opencollective.com/${uri}`);

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
