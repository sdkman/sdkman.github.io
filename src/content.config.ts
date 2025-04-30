import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const jdks = defineCollection({
  loader: file('src/data/jdks.yml'),
  schema: z.object({
    id: z.string(),
    vendor: z.string(),
    distribution: z.string(),
    url: z.string(),
    description: z.string(),
    isDefault: z.boolean().optional(),
    architecture: z
      .object({
        icons: z.string().array().optional(),
        list: z.string().array().optional(),
      })
      .optional(),
    os: z
      .object({
        icons: z.string().array().optional(),
      })
      .optional(),
  }),
});

const sdks = defineCollection({
  loader: async () => {
    const response = await fetch('https://api.sdkman.io/2/candidates/list');
    const data = await response.text();
    const sdks = parseSDKs(data);

    return sdks;
  },
  schema: z.object({
    id: z.string(),
    title: z.string(),
    url: z.string(),
    description: z.string(),
  }),
});

export const collections = { docs, jdks, sdks };

function parseSDKs(sdksData: string) {
  const baseParts = sdksData
    .split(
      '--------------------------------------------------------------------------------',
    )
    .slice(1, -1);

  return baseParts.map((item) => {
    const lines = item.slice(1, -1).split('\n');
    const id = lines.slice(-1)[0].split(' ').slice(-1)[0].trim();
    const title = `${lines[0].split(')')[0].trim()})`;
    const url = lines[0].split(')').slice(-1)[0].trim();
    const description = lines.slice(2, -2).join('\n').trim();

    return {
      id,
      title,
      url,
      description,
    };
  });
}
