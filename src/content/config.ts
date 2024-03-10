import { defineCollection, z } from 'astro:content';
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({ 
        og_image: z.string().optional(),
        package: z.string().optional() || "aoi.js",
        type: z.string().optional(),
        extensionUrl: z.string().url().optional(),
      }),
    }),
  }),
} 
