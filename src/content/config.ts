import { defineCollection, z } from 'astro:content';
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({ 
        author: z.string().optional(),
        author_url: z.string().optional(),
        edited_by: z.string().optional(),
        edited_by_url: z.string().optional(),
        type: z.string().optional(),
        og_image: z.string().optional(),
        package: z.string().optional() || "aoi.js",
        extensionUrl: z.string().url().optional(),
      }),
    }),
  }),
} 
