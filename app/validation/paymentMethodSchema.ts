import * as z from "zod";
import { PaymentMethodForm } from "../types";

export const paymentMethodSchema: z.ZodSchema<PaymentMethodForm> = z.object({
  firstName: z.string().min(1, "First Name is required").regex(/^[a-zA-Z\s]+$/, "First Name can only contain letters and spaces"),
  lastName: z.string().regex(/^[a-zA-Z\s]+$/, "Last Name can only contain letters and spaces").optional(),
  country: z.string().min(1, "Country is required"),
});