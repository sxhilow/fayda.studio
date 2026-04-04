import { defineCollection } from "astro:content";
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/case-studies' }),
    schema: (ctx) => z.object({
        title: z.string(),
        category: z.string(),
        description: z.string(),
        client: z.string(),
        sector: z.string(),
        duration: z.string(),
        coverImage: ctx.image(),
        alt: z.string(),
    })
});

export const collections = {
    'case-studies': caseStudies
}