import type { OpenCollectiveSponsor } from '@/types/open-collective';

import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { generateAvatarFallback } from '@/lib/utils';

type OpenCollectiveIndividualCardProps = {
  individual: OpenCollectiveSponsor;
};

function OpenCollectiveIndividualCard({
  individual,
}: Readonly<OpenCollectiveIndividualCardProps>) {
  return (
    <Link href={individual.profile}>
      <Card className="h-full">
        <CardHeader>
          <Avatar className="mx-auto mb-6 size-16">
            <AvatarImage
              className="avatar__photo avatar__photo--lg"
              src={individual.image}
            />

            <AvatarFallback className="text-foreground dark:text-background bg-white">
              {generateAvatarFallback(individual.name)}
            </AvatarFallback>
          </Avatar>

          <CardTitle className="text-center">
            <h4>{individual.name}</h4>
          </CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}

type OpenCollectiveOrganizationCardProps = {
  organization: OpenCollectiveSponsor;
};

function OpenCollectiveOrganizationCard({
  organization,
}: Readonly<OpenCollectiveOrganizationCardProps>) {
  return (
    <Link href={organization.profile}>
      <Card className="relative">
        <CardHeader>
          <Avatar className="mb-6 size-16">
            <AvatarImage src={organization.image} />

            <AvatarFallback className="text-foreground dark:text-background bg-white">
              {generateAvatarFallback(organization.name)}
            </AvatarFallback>
          </Avatar>

          {organization.tier ? (
            <Badge className="absolute top-6 right-6" variant="outline">
              {organization.tier}
            </Badge>
          ) : null}

          <CardTitle>
            <h4>{organization.name}</h4>
          </CardTitle>
        </CardHeader>

        <CardFooter className="justify-between">
          <span className="text-xl font-bold text-green-500">
            $ {organization.totalAmountDonated.toFixed(0)}
          </span>
          <span>
            since{' '}
            {new Intl.DateTimeFormat('en-GB', {
              year: 'numeric',
              month: 'short',
            }).format(new Date(organization.createdAt))}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}

export { OpenCollectiveIndividualCard, OpenCollectiveOrganizationCard };
