import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";
// import { docsVersionsSchema } from "starlight-versions/schema";

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        type: z.string().optional(),
        // og_image: z.string().optional(),
        package: z.string().optional() || "aoi.js",
        extensionUrl: z.string().url().optional(),
      }),
    }),
  }),
  // versions: defineCollection({ type: "data", schema: docsVersionsSchema() }),
};
