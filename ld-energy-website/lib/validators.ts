import { z } from 'zod'

export const propertyTypes = [
  'Studio',
  '1 Bedroom',
  '2 Bedroom',
  '3 Bedroom',
  '4 Bedroom',
  '5+ Bedroom',
] as const

export const services = ['EPC Certificate', 'Floor Plan', 'Both (Bundle)'] as const

export const speeds = ['Standard (72 hours)', 'Express (Next day, +£12)'] as const

export const ukPostcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name').max(120),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone number')
    .max(30)
    .regex(/^[\d\s+()-]+$/, 'Phone number contains invalid characters'),
  email: z.string().trim().toLowerCase().email('Please enter a valid email address').max(200),
  address: z.string().trim().min(5, 'Please enter the property address').max(500),
  postcode: z
    .string()
    .trim()
    .toUpperCase()
    .regex(ukPostcodeRegex, 'Please enter a valid UK postcode'),
  propertyType: z.enum(propertyTypes, { required_error: 'Please select a property type' }),
  services: z
    .array(z.enum(services))
    .min(1, 'Please choose at least one service'),
  speed: z.enum(speeds, { required_error: 'Please choose a service speed' }),
  preferredDate: z.string().trim().max(40).optional().or(z.literal('')),
  notes: z.string().trim().max(2000).optional().or(z.literal('')),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Please confirm you agree to be contacted' }),
  }),
  /** Honeypot, must remain empty */
  website: z.string().max(0).optional().or(z.literal('')),
})

export type ContactInput = z.infer<typeof contactSchema>
