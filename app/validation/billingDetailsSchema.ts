import * as z from "zod";
import { BillingDetailsForm } from "../types";

export const billingDetailsSchema: z.ZodSchema<BillingDetailsForm> = z.object({
  firstName: z.string().min(1, "First Name is required").regex(/^[a-zA-Z\s]+$/, "First Name can only contain letters and spaces"),
  lastName: z.string().regex(/^[a-zA-Z\s]+$/, "Last Name can only contain letters and spaces").optional(),
  email: z.string().email("Invalid email address"),
  mobileNumber: z.string().min(10, "Mobile Number is required").regex(/^\d{10,}$/, "Invalid Mobile Number"),
  country: z.string().min(1, "Country is required"),
});
