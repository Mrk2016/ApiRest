import { z } from "zod";

export const createSchema = z.object({
  name: z.string({
    required_error: "name is required",
  }),
  description: z.string({
    required_error: "Description is required",
  }),
  status: z.string({
    required_error: "Status is required",
  }),
});

export const updateSchema = z.object({
  name: z.string({
    required_error: "name is required",
  }),
  description: z.string({
    required_error: "Description is required",
  }),
  status: z.string({
    required_error: "Status is required",
  }),
});
