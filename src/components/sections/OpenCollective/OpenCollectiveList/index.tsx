import Section from '../Section';
import Subsection from '../Subsection';
import Buttons from '../Buttons';
import Organizations from './Organizations';
import Individual from './Individual';

import { useOpenCollective } from '@site/src/hooks/use-open-collective';

export default function OpenCollectiveList() {
  const { organizationsSponsors, individualSponsors } = useOpenCollective();

  return (
    <Section>
      {/* Organizations */}
      <Subsection title={`${organizationsSponsors.length} Organizations`}>
        <Organizations organizationsSponsors={organizationsSponsors} />
      </Subsection>

      {/* Individual */}
      <Subsection title={`${individualSponsors.length} People`}>
        <Individual individualSponsors={individualSponsors} />
      </Subsection>

      {/* Buttons */}
      <Buttons />
    </Section>
  );
}
