// If you change the structure of any frontmatter, run `npm run astro build sync` or any else
// command to sync frontmatter type.

import { SITE } from "@/config";
import { defineCollection, z } from "astro:content";
import { slug } from "github-slugger";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z
        .array(z.string())
        .default(["others"])
        .transform(tags => tags.map(tag => ({ name: tag, slug: slug(tag) }))),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
    }),
});

const album = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      title: z.string(),
      sciName: z.string(),
      cnName: z.string(),
      comName: z.string(),
      url: z.string(),
      mediaType: z.string(),
      images: z.array(z.string()),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
    }),
});

export const collections = { blog, album };
