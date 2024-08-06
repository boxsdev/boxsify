import * as z from "zod"

export const LoginSchema = z.object({
  email: z.string().email({ message: "invalid email address" }),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters" }),
})

export type LoginSchemaType = z.infer<typeof LoginSchema>

export const RegisterSchema = z.object({
  name: z.string().min(3, { message: "name must be at least 3 characters" }),
  email: z.string().email({ message: "invalid email address" }),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters" }),
})

export type RegisterSchemaType = z.infer<typeof RegisterSchema>

export const ForgotPasswordSchema = z.object({
  email: z.string().email(),
})

export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>

export const ResetPasswordSchema = z.object({
  password: z.string().min(8),
})

export type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>

export const ChangePasswordSchema = z.object({
  oldPassword: z.string().min(8),
  newPassword: z.string().min(8),
})

export type ChangePasswordSchemaType = z.infer<typeof ChangePasswordSchema>

export const VerifyEmailSchema = z.object({
  code: z.string().min(6),
})

export type VerifyEmailSchemaType = z.infer<typeof VerifyEmailSchema>

export const UpdateProfileSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
})

export type UpdateProfileSchemaType = z.infer<typeof UpdateProfileSchema>

export const UpdatePasswordSchema = z.object({
  oldPassword: z.string().min(8),
  newPassword: z.string().min(8),
})

export type UpdatePasswordSchemaType = z.infer<typeof UpdatePasswordSchema>

export const UpdateEmailSchema = z.object({
  email: z.string().email(),
})

export type UpdateEmailSchemaType = z.infer<typeof UpdateEmailSchema>
