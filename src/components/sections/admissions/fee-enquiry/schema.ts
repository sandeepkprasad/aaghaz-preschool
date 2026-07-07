import { z } from "zod";

export const feeSchema = z.object({
  parentName: z.string().min(3, "Please enter parent's full name"),

  email: z.string().email("Invalid email address"),

  phone: z.string().min(10, "Phone number is required"),

  program: z.string().min(1, "Please select a program"),

  message: z.string().optional(),
});

export type FeeSchema = z.infer<typeof feeSchema>;
