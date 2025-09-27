import { z, defineCollection } from "astro:content";

// Every collection must reflect Decap's config.yml collection schema
// In order to be able to optimize images with Astro built-in components, like <Image />, we first must use this image helper 
// Doc: https://docs.astro.build/en/guides/images/#images-in-content-collections

const detailsCollection = defineCollection({
	type: "data",
	schema: () =>
		z.object({
			name: z.string(),
			email: z.string(),
			tagline: z.string(),
			description: z.string(),
			domain: z.string(),
			nav: z.array(
				z.object({
					label: z.string(),
					url: z.string(),
					new_tab: z.boolean().optional(),
				})
			),
			socials: z.array(
				z.object({
					label: z.string(),
					url: z.string(),
					title: z.string(),
					content: z.string(),
					target: z.string(),
					rel: z.string(),
				})
			),
			keywords: z.array(z.string()).optional(),
		}),
});

const worksCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			description_seo: z.string(),
			software_used: z.string(),
			categories: z.array(z.string()).optional(),
			tags: z.array(z.string()).optional(),
			date: z.string().optional(),
			draft: z.boolean().default(false).optional(),
			image: image().or(z.string()).optional(),
			imageAlt: z.string().optional(),
		}),
});

export const collections = {
	details: detailsCollection,
	work: worksCollection,
};