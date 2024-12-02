import { z } from "zod";

export const storySchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  imageUrl: z.string().optional(),
  primaryColor: z.string().optional(),
  secondaryColor: z.string().optional(),
});

export const nodeSchema = z.object({
  title: z.string().min(1),
  text: z.string().optional(),
  imageLink: z.string().nullable().optional(),
  storyId: z.string(),
  firstNode: z.boolean(),
  previousNodeId: z.string().nullable().optional(),
});
