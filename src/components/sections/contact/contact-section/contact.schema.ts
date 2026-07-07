import { z } from "zod";

export const contactSchema = z.object({
  parentName: z.string().min(2, "Parent name is required"),

  email: z.string().email("Enter a valid email"),

  phone: z.string().min(10, "Enter valid phone number"),

  ageGroup: z.string().min(1, "Please select age group"),

  message: z.string().min(10, "Please enter your message"),
});

export type ContactSchema = z.infer<typeof contactSchema>;
