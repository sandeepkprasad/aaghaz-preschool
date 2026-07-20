import { submitFormData } from "@/services/google-sheet.service";

export const submitContactForm = (data: any) =>
  submitFormData({
    ...data,
    source: "Contact Page",
  });
