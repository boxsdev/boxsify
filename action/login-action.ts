"use server"

import { LoginSchema, LoginSchemaType } from "@/schemas"

export const LOGIN_ACTION = async (data: LoginSchemaType) => {
  const validatedData = LoginSchema.safeParse(data)

  if (!validatedData.success) {
    return { error: "invalid credentials" }
  }

  console.log(validatedData.data)
}
