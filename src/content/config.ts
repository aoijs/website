import { defineCollection, z } from "astro:content";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";
import { docSearchI18nSchema } from "@astrojs/starlight-docsearch/schema";

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
  i18n: defineCollection({
    type: "data",
    schema: i18nSchema({ extend: docSearchI18nSchema() }),
  }),
};
