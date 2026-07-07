import { submitFeeEnquiry } from "@/services/google-sheet.service";

export const submitContactForm = (data: any) =>
  submitFeeEnquiry({
    ...data,
    source: "Contact Page",
  });
