import type { LoadContext } from '@docusaurus/types';

import sdks from '../data/sdks';

export default function sdksDetailsPlugin(context: LoadContext) {
  return {
    name: 'docusaurus-sdks-details',
    async contentLoaded({ content, actions }) {
      const { addRoute } = actions;

      sdks.forEach((SDK) => {
        addRoute({
          path: `${context.baseUrl}sdks/${SDK.id}`,
          component:
            '@site/src/components/plugins-pages/SdkDetailsPage/index.tsx',
        });
      });
    },
  };
}
