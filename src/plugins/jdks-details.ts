import type { LoadContext } from '@docusaurus/types';

import jdks from '../data/jdks';

export default function jdksDetailsPlugin(context: LoadContext) {
  return {
    name: 'docusaurus-jdks-details',
    async contentLoaded({ content, actions }) {
      const { addRoute } = actions;

      jdks.forEach((JDK) => {
        addRoute({
          path: `${context.baseUrl}jdks/${JDK.id}`,
          component:
            '@site/src/components/plugins-pages/JdkDetailsPage/index.tsx',
        });
      });
    },
  };
}
