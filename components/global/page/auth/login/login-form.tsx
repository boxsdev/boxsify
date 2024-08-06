"use client"

import { useState, useTransition } from "react"
import { LOGIN_ACTION } from "@/action/login-action"
import { LoginSchema, LoginSchemaType } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { CardWrapper } from "@/components/global/page/auth/card-wrapper"
import { FormError } from "@/components/global/page/auth/form-error"

export const LoginForm = () => {
  const { toast } = useToast()

  const [error, setError] = useState<string | undefined>("")

  const [isPending, startTransition] = useTransition()

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (data: LoginSchemaType) => {
    setError("")

    startTransition(() => {
      LOGIN_ACTION(data).then((act) => {
        setError(act?.error)
      })
    })
  }

  return (
    <CardWrapper
      headerLabel={"welcome back!"}
      backButtonLabel={"don't have an account?"}
      backButtonHref={"/auth/register"}
      showSocials
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="email"
                      placeholder="username@domain.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="password"
                      placeholder="*******"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <Button
            type="submit"
            className="w-full text-base"
            disabled={isPending}
          >
            login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
