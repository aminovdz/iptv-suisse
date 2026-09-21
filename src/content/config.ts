import { defineCollection, z } from 'astro:content';

const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Rédaction IPTV Suisse'),
    image: z.string().default('/images/hero-bg.svg'),
    imageAlt: z.string().default('Guide et comparatif IPTV Suisse en 4K'),
    tags: z.array(z.string()).default(['IPTV Suisse', 'Streaming', 'Guide', 'Smart TV']),
    featured: z.boolean().default(false),
    readingTime: z.string().default('6 min de lecture'),
    category: z.string().default('Guides & Comparatifs'),
    targetKeyword: z.string().optional()
  })
});

export const collections = {
  guides: guidesCollection
};
